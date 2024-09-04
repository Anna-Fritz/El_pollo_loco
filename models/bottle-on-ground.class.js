class BottleOnGround extends CollactableObject {
    x = 120 + Math.random() * 2200;
    y = 340;
    width = 90;
    height = 90;

    constructor(path) {
        super().loadImage(path);
    }

}