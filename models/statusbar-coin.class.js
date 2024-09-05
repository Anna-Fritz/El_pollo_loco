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

    // setAmount(50)
    collectCoins(amount){
        this.wallet = amount; // => 0...5
        let path = this.IMAGES_COIN[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

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

    isCollected() {
        this.wallet += 20;
    }

}