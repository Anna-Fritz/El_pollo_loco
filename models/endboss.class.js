class Endboss extends MovableObjects {
    x = 2550;
    height = 320 * 1.165;
    width = 320;
    y = 80;

    offset = {
        top: 60,
        left: 20,
        right: 10,
        bottom: 20
    };

    IMAGES_WALKING = [
        '../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    IMAGES_ALERT = [
        '../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../img/4_enemie_boss_chicken/1_walk/G4.png',
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_ATTACK = [
        '../img/4_enemie_boss_chicken/3_attack/G13.png',
        '../img/4_enemie_boss_chicken/3_attack/G14.png',
        '../img/4_enemie_boss_chicken/3_attack/G15.png',
        '../img/4_enemie_boss_chicken/3_attack/G16.png',
        '../img/4_enemie_boss_chicken/3_attack/G17.png',
        '../img/4_enemie_boss_chicken/3_attack/G18.png',
        '../img/4_enemie_boss_chicken/3_attack/G19.png',
        '../img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    IMAGES_HURT = [
        '../img/4_enemie_boss_chicken/4_hurt/G21.png',
        '../img/4_enemie_boss_chicken/4_hurt/G22.png',
        '../img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    IMAGES_DEAD = [
        '../img/4_enemie_boss_chicken/5_dead/G24.png',
        '../img/4_enemie_boss_chicken/5_dead/G25.png',
        '../img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    audioPlayed = false;
    attack = false;

    constructor(){
        super();
        this.loadImage('../img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
        this.move();
    }

    /**
     * controls the endboss character's animation by periodically checking its state (dead, hurt, alert, or attacking) and playing the corresponding animation sequence based on its energy level and actions
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout (this.deadBossGone(),2000);

                } else if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT);
                
                    } else if (this.energy < 100 || this.attack) {
                        this.playAnimation(this.IMAGES_ATTACK);
                        
                        } else if (this.energy < 80) {
                            this.playAnimation(this.IMAGES_ALERT);

                            } else if (this.energy < 60) {
                                this.playAnimation(this.IMAGES_ALERT);

                                } else if (this.energy < 40 && this.energy > 0 || this.attack) {
                                    this.playAnimation(this.IMAGES_ATTACK);

                                    } else  {
                                        this.playAnimation(this.IMAGES_ALERT);
                                    }   
        }, 300);
    }

    /**
     * enables back-and-forth movement for the character by alternating between moving right and left within a defined range
     */
    move() {
        let movingRight = true;
        setInterval(() => {
            if (movingRight) {
                this.animateToRight();
                if (this.x >= 2600) {
                movingRight = false;
                }
            } 
                else {
                    this.animateToLeft();
                    if (this.x <= 2200) {
                    movingRight = true;
                    }
                }
        }, 1000 / 60);
    }

    /**
     * sets a random speed and moves the endboss to the right, updating the direction flag to indicate the character is facing right
     */
    animateToRight() {
        this.speed = Math.random() * 5;
        this.moveRight();
        this.otherDirection = true;
    }

    /**
     * sets a random speed, moves the endboss to the left, updates the direction flag to indicate the character is facing left, and activates the attack state
     */
    animateToLeft() {
        this.speed = Math.random() * 10;
        this.moveLeft();
        this.otherDirection = false;
        this.attack = true;
    }

    /**
     * initiates the vertical movement of the defeated boss character, making it rise with decreasing speed while playing a death sound
     */
    deadBossGone() {
        this.speedY = 15;
        setInterval(() => {
            this.y -= this.speedY;
            this.speedY -= this.acceleration; 
        }, 1000 / 25);

        if (!this.audioPlayed) {
            endboss_dies.play();
            setTimeout(() => {
                winning.play();
            },1300)
            this.audioPlayed = true;
            endboss_alert.pause();
        }
    }
}