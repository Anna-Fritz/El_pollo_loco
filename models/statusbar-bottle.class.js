class StatusBarBottle extends DrawableObjects {
    x = 20;
    y = 90;
    width = 50*3.77;
    height = 50;
    bottleBag = 0;

    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.collectBottles(0);
    }

    /**
     * updates the bottleBag property with the given value and sets the object's image to a specific bottle image based on the current index
     * @param {*} bottleBag 
     */
    collectBottles(bottleBag){
        this.bottleBag = bottleBag;
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    /**
     * returns an index based on the number of bottles collected, determining which bottle image to use according to specified thresholds
     * @returns an index
     */
    resolveImageIndex() {
        if (this.bottleBag >= 100) {
            return 5;
        } else if (this.bottleBag >= 80) {
            return 4;
        } else if (this.bottleBag >= 60) {
            return 3;
        } else if (this.bottleBag >= 40) {
            return 2;
        } else if (this.bottleBag >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * increases the bottleBag by 20, indicating that a bottle has been collected
     */
    isCollected() {
        this.bottleBag += 20;
    }

    /**
     * decreases the bottleBag by 20, indicating that a bottle has been thrown away
     */
    isThrown() {
        this.bottleBag -= 20;
    }
}