class Endboss extends MovableObjects {
    x = 2550;
    height = 320 * 1.165;
    width = 320;
    y = 80;
    IMAGES_WALKING = [
        '../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    IMAGES_ALERT = [
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
    ]
    isHit = false;

    constructor(){
        super().loadImage('../img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.x >= 2200) {
                // this.moveLeft();
            } else if (this.x < 2000) {
                this.moveRight();
                console.log("chicken move right");
                
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isHit) {
                this.playAnimation(this.IMAGES_HURT);
                // this.isHurt = false;
            } else if (this.bossEnergy < 100) {
                this.playAnimation(this.IMAGES_ALERT);
                } else if (this.bossEnergy < 80) {
                    this.playAnimation(this.IMAGES_ATTACK)
                    } else if (this.bossEnergy < 60) {
                        this.playAnimation(this.IMAGES_ALERT)
                        } else if (this.bossEnergy < 40 && this.energy > 0) {
                            this.playAnimation(this.IMAGES_ATTACK)
                            } else if (this.bossIsDead()) {
                                this.playAnimation(this.IMAGES_DEAD)
                                } else {
                                    this.playAnimation(this.IMAGES_WALKING);
                                    }
        }, 200);
    }
}