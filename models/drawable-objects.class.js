class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    y = 45;

    
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Chick || this instanceof Bottle || this instanceof Endboss || this instanceof Coin || this instanceof BottleOnGround) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.left -this.offset.right, this.height - this.offset.top - this.offset.bottom)
            ctx.stroke();    
        }
    }
    
}