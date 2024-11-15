class ThrowableObject extends MovableObjects {
    speedY = 30;
    speedX = 20;
    movementInterval;

    /**
     * initiates the throwing action by setting the object's position, and if the object's vertical position does not exceed a threshold, it continuously updates its horizontal position at regular intervals
     * @param {number} x object's horizontal position
     * @param {number} y object's vertical position 
     */
    throw(x, y) {
        this.setThrowingAction(x, y);
        if (this.y >= 345) {
            this.speedY = 0;
        } else {
            this.movementInterval = setInterval(() => {
                this.x += 10;
            }, 25)    
        }    
    }

    /**
     * starts the throwing action by setting the object's position and then continuously updates its horizontal position to move left at regular intervals
     * @param {number} x object's horizontal position
     * @param {number} y object's vertical position 
     */
    throwLeft(x, y) {
        this.setThrowingAction(x, y);
        setInterval(() => {
            this.x -= 10;
        }, 25)
    }

    /**
     * initializes the object's position and vertical speed for throwing, while also applying gravity to simulate the effect of falling
     * @param {number} x object's horizontal position
     * @param {number} y object's vertical position 
     */
    setThrowingAction(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
    }
}