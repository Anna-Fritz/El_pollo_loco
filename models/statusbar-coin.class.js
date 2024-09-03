class StatusBarCoin extends DrawableObjects {
    x = 20;
    y = 50;
    width = 50*3.77;
    height = 50;
    percentage = 0;

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
        this.setPercentage(0);
    }

    // setPercentage(50)
    setPercentage(percentage){
        this.percentage = percentage; // => 0...5
        let path = this.IMAGES_COIN[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    resolveImageIndex() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage > 20) {
            return 1;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 80) {
            return 4;
        } else {
            return 5;
        }
    }
}