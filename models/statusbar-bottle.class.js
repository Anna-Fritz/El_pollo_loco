class StatusBarBottle extends DrawableObjects {
    x = 20;
    y = 90;
    width = 50*3.77;
    height = 50;
    bottleBag = 0;

    IMAGES_BOTTLE = [
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.collectBottles(0);
    }

    // setAmount(50)
    collectBottles(bottleBag){
        this.bottleBag = bottleBag; // => 0...5
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    resolveImageIndex() {
        if (this.bottleBag < 20) {
            return 0;
        } else if (this.bottleBag >= 20) {
            return 1;
        } else if (this.bottleBag >= 40) {
            return 2;
        } else if (this.bottleBag >= 60) {
            return 3;
        } else if (this.bottleBag >= 80) {
            return 4;
        } else {
            return 5;
        }
    }

    isCollected() {
        this.bottleBag += 20;
    }

    isThrown() {
        this.bottleBag -= 20;
    }
}