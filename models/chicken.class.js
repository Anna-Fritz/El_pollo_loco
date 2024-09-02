class Chicken extends MovableObjects {
    x = 200 + Math.random() * 500;
    height = 80;
    width = 80;
    y = 340;
    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    chicken_sound = new Audio('../audio/chicken-chatter.mp3');

    constructor(){
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
        this.chickenTalk();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    chickenTalk() {
        this.chicken_sound.loop = true;
        this.chicken_sound.volume = 0.5;
        // this.chicken_sound.play();
    }

    
}