class Bottle extends ThrowableObject {
    width = 90;
    height = 90;

    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    };

    IMAGES_BOTTLE_ROTATION = [
        '../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    IMAGES_BOTTLE_SPLASH = [
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    IMAGE_SPLASH = [
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png'
    ];

    constructor() {
        super().loadImage('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    }

    /**
     * continuously plays the bottle rotation animation
     */
    animate() {           
        this.rotationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        }, 100)
    }

    /**
     * continuously plays the bottle splash animation
     */
    animateSplash() {
        clearInterval(this.rotationInterval);
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_SPLASH)
        }, 75)
    }
}
