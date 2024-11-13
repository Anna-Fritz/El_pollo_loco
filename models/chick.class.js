class Chick extends MovableObjects {
    x = 200 + Math.random() * 2600;
    height = 55*1.12;
    width = 55;
    y = 365;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    playOnce = true;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ];


    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
        this.move();
    }

    /**
     * repeatedly plays the walking animation if the chick is not dead; otherwise, it plays the death animation
     */
    animate() {
        setInterval(() => {
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                if (this.playOnce) {
                    death_chick.play();
                    this.playOnce = false;
                }
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 200);        
    }

    /**
     * moves the chick left if it is not dead
     */
    move() {
        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }
}