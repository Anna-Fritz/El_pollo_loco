class Cloud extends MovableObjects {
    y = 20;
    width = 700;
    height = 700 * 0.5625; 
 
    constructor(path, x){
        super().loadImage(path);
        this.x = x;
        this.animate();
    }

    /**
     * creates a continuous movement loop that moves the clouds left
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}