class MovableObjects extends DrawableObjects {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    is_dead = false;
    lastHit = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
     * continuously updates the object's vertical position by applying gravitational acceleration while it is above ground or falling
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }
    
    /**
     * checks if the object is above ground
     * @returns true for throwable objects and for other objects, it checks if their vertical position is less than 155
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable objects should always fall
            return true;
        } else {
            return this.y < 155;
        }
    }

    /**
     * checks if the character's vertical position (y) is at or below the ground level (155), indicating that the character is on the ground
     * @returns checks if vertical position is greater than or equal to 155
     */
    isOnGround() {
        return this.y >= 155;
    }

    /**
     * determines if the current object is colliding with another object by comparing their positions and dimensions, taking into account any specified offsets
     * @param {*} mo
     * @returns 
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * reduces the character's energy by 5, ensuring it does not fall below zero, and updates the timestamp of the last hit if the energy remains above zero
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * decreases the end boss's energy by 10, preventing it from going below zero, and updates the timestamp of the last hit if the energy remains above zero
     */
    endbossHit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * checks if the character's energy is zero, indicating that the character is dead
     * @returns 
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * determines if the character is currently hurt based on whether less than 0.8 seconds have passed since the last hit was taken
     * @returns 
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.8;
    }

    /**
     * updates the character's current image by cycling through an array of images based on the currentImage index
     * @param {array} images array of images
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * updates the character's image by setting it to the specified image from the image cache
     * @param {string} image path of current image
     */
    playCharacterAnimation(image) {
        this.img = this.imageCache[image];
    }

    /**
     * increments the object's horizontal position (x) by its speed, effectively moving it to the right on the canvas
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * decrements the object's horizontal position (x) by its speed, effectively moving it to the left on the canvas
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * sets the vertical speed (speedY) of the object to 25, allowing it to move upward when executed
     */
    jump() {
        this.speedY = 25;
    }

}