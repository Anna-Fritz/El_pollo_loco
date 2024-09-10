class BottleOnGround extends CollactableObject {
    x = 300 + Math.random() * 2000;
    y = 340 + Math.random() * 20;
    width = 90;
    height = 90;

    constructor(path) {
        super().loadImage(path);
    }

}