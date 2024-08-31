class Character extends MovableObjects {
    x = 120;
    y = 155;
    img;
    width = 140;
    height = 140 * 1.97;

    constructor(){
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
    }


    jump() {

    }
}