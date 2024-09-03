class ThrowableObject extends MovableObjects {
    speedY = 30;
    speedX = 20;

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => {
            this.x += 10;
        }, 25)

    }
}