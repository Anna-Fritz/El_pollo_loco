class Coin extends CollactableObject {
    x = 300 + Math.random() * 2000;
    height = 120;
    width = 120;
    y = 100 + Math.random() * 150;

    IMAGES_COIN = [
        '../img/8_coin/coin_1.png',
        '../img/8_coin/coin_2.png',
    ];

    constructor(){
        super().loadImage('../img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN); 
        }, 200);        
    }

}