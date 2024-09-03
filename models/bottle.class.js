class Bottle extends ThrowableObject {
    x = 200;
    y = 200;
    width = 90;
    height = 90;

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
    ]

    constructor() {
        super().loadImage('../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        // this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        // this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        // this.applyGravity();
        // this.animate();
        this.throw(200, 150);
    }

    animate() {
        setInterval(() => {
            // if (this.world.keyboard.KEY_D) {
            //     this.throw();
            // }
        }, 1000 / 60);

    }
}
