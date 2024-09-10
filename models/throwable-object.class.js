class ThrowableObject extends MovableObjects {
    speedY = 30;
    speedX = 20;

    // throw(x, y) {
    //     this.x = x;
    //     this.y = y;
    //     this.speedY = 30;
    //     this.applyGravity();
    
    //     let objectHasStopped = false;  // Flag-Variable
    
    //     setInterval(() => {
    //         if (!objectHasStopped) {  // Solange das Objekt nicht gestoppt ist
    //             this.x += 10;
    //         }
    
    //         // Überprüfe, ob y den Wert 300 erreicht oder überschreitet
    //         if (this.y > 270) {
    //             this.y = 270;  // Stelle sicher, dass y nicht unter 300 geht
    //             objectHasStopped = true;  // Setze das Flag auf true, um die Bewegung zu stoppen
    //         }
    //     }, 25);
    // }    

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();

        if (this.y >= 345) {
            this.speedY = 0;
        } else {
            setInterval(() => {
                this.x += 10;
            }, 25)    
        }
        // setInterval(() => {
        //     this.x += 10;
        // }, 25)
    }

    throwLeft(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => {
            this.x -= 10;
        }, 25)
    }
}