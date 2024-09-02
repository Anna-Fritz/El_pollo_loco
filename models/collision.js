if (character.x + character.width > chicken.x &&
    character.y + character.height > chicken.y &&
    character.x < chicken.x &&
    character.y < chicken.y + chicken.height) {
    }

isColliding(mo) {
    return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height
}

// Bessere Formel zur Kollisionsberechnung (Genauer)
isColliding (obj) {
    return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) && 
            (this.Y + this.offsetY + this.height) >= obj.Y &&
            (this.Y + this.offsetY) <= (obj.Y + obj.height) && 
            obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

}