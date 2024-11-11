class Chicken extends MovableObjects {
    x = 200 + Math.random() * 2600;
    height = 80;
    width = 80;
    y = 340;
    playOnce = true;
    
    offset = {
        top: 10,
        left: 5,
        right: 5,
        bottom: 10
    };

    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    IMAGES_DEAD = [
        '../img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    constructor(){
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
        this.move();
    }

    /**
     * repeatedly plays the walking animation if the chicken is not dead; otherwise, it plays the death animation
     */
    animate() {
        setInterval(() => {
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                if (this.playOnce) {
                    death_chicken.play();   
                    this.playOnce = false; 
                }
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 200);        
    }

    /**
     * moves the chicken left if it is not dead
     */
    move() {
        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }
  
}