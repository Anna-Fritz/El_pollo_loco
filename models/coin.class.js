class Coin extends CollactableObject {
    x = 300 + Math.random() * 2000;
    height = 120;
    width = 120;
    y = 100 + Math.random() * 150;

    offset = {
        top: 40,
        left: 40,
        right: 40,
        bottom: 40
    };

    IMAGES_COIN = [
        '../img/8_coin/coin_1.png',
        '../img/8_coin/coin_2.png',
    ];

    constructor(){
        super().loadImage('../img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    /**
     * repeatedly plays the coin animation
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN); 
        }, 200);        
    }

}