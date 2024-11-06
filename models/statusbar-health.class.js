class StatusBarHealth extends DrawableObjects {
    x = 20;
    y = 10;
    width = 50*3.77;
    height = 50;
    percentage = 100;

    IMAGES_HEALTH = [
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.setPercentage(100);
    }

    /**
     * updates the health percentage and changes the displayed image based on the current health status using the corresponding image index
     * @param {*} percentage 
     */
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    /**
     * determines the appropriate index for the health image based on the current health percentage, mapping different ranges of health to specific images
     * @returns index for the health image
     */
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