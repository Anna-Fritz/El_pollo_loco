class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    y = 45;

    /**
     * creates a new image object and sets its source to the specified file path
     * @param {string} path image source
     */
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * iterates over an array of image paths, creates a new image for each path, and stores each image in an imageCache object for later use
     * @param {array} arr Array of animation images
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * renders the loaded image onto the specified canvas context at the object's current position and dimensions
     * @param {*} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * outlines the bounding box of the object on the canvas context, using a transparent stroke for specific object types
     * @param {*} ctx 
     */
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