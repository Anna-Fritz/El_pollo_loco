class Chicken extends MovableObjects {
    x = 200 + Math.random() * 500;
    height = 80;
    width = 80;
    y = 340;

    constructor(){
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        // this.x = 200 + Math.random() * 500;
        // this.height = 80;
        // this.width = 80;
        // this.y = 340;
    }
    
}