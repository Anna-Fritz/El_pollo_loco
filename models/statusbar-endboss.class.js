class StatusBarEndboss extends DrawableObjects {
    x = 505;
    y = 10;
    width = 50*3.77;
    height = 50;
    percentage = 100;

    IMAGES_ENDBOSS = [
        '../img/7_statusbars/2_statusbar_endboss/green/green0.png',
        '../img/7_statusbars/2_statusbar_endboss/green/green20.png',
        '../img/7_statusbars/2_statusbar_endboss/green/green40.png',
        '../img/7_statusbars/2_statusbar_endboss/green/green60.png',
        '../img/7_statusbars/2_statusbar_endboss/green/green80.png',
        '../img/7_statusbars/2_statusbar_endboss/green/green100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_ENDBOSS);
        this.setPercentage(100);
    }

    // setPercentage(50)
    setPercentage(percentage){
        this.percentage = percentage; // => 0...5
        let path = this.IMAGES_ENDBOSS[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}