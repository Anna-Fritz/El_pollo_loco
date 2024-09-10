class BottleOnGround extends CollactableObject {
    x = 300 + Math.random() * 2000;
    y = 340 + Math.random() * 20;
    width = 90;
    height = 90;

    offset = {
        top: 15,
        left: 25,
        right: 20,
        bottom: 10
    };

    constructor(path) {
        super().loadImage(path);
    }

}