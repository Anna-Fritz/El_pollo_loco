class Cloud extends MovableObjects {
    y = 20;
    width = 700;
    height = 700 * 0.5625; 
 
    constructor(path, x){
        super().loadImage(path);
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}