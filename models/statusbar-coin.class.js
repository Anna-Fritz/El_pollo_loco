class StatusBarCoin extends DrawableObjects {
    x = 20;
    y = 50;
    width = 50*3.77;
    height = 50;
    wallet = 0;

    IMAGES_COIN = [
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',

    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.collectCoins(0);
    }

    /**
     * updates the player's wallet with the specified amount and sets the corresponding coin image based on the new coin count
     * @param {*} amount 
     */
    collectCoins(amount){
        this.wallet = amount;
        let path = this.IMAGES_COIN[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    /**
     * determines the index of the coin image to use based on the player's current wallet amount, providing different images for varying levels of coin collection
     * @returns the index of the coin image
     */
    resolveImageIndex() {
        if (this.wallet >= 100) {
            return 5;
        } else if (this.wallet >= 80) {
            return 4;
        } else if (this.wallet >= 60) {
            return 3;
        } else if (this.wallet >= 40) {
            return 2;
        } else if (this.wallet >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * increases the player's wallet by 20, representing the collection of coins or currency
     */
    isCollected() {
        this.wallet += 20;
    }

}