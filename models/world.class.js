class World {
    character = new Character();
    chicken = new Chicken();
    bottle = new Bottle();
    endboss = new Endboss();
    statusBarHealth = new StatusBarHealth();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    statusBarEndboss = new StatusBarEndboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 100);

        setInterval(() => {
            this.checkThrowObjects();
        }, 350);

        setInterval(() => {
            this.removeEnemy();
        }, 2500);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                console.log("character jumped on chicken");
                enemy.energy = 0;
                console.log(enemy);
            }; 
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy)
            };
            if (this.bottle.isColliding(enemy)) {
                console.log("Help!");
                
                this.endboss.hit();
                this.statusBarEndboss.setPercentage(this.endboss.energy);
                console.log("endboss is hit"); 
            }     
        });
        // if (this.bottle.isColliding(this.endboss)) {
        //     console.log("Help!");
            
        //     this.endboss.hit();
        //     this.statusBarEndboss.setPercentage(this.endboss.energy);
        //     console.log("endboss is hit");
            
        // } 


    }

    removeEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (enemy.energy == 0) {
                let index = this.level.enemies.indexOf(enemy);
                if (index > -1) {
                   this.level.enemies.splice(index, 1);
                }
            }   
        })
    }

    checkThrowObjects() {
        if(this.keyboard.KEY_D) {
            let newBottle = new Bottle(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(newBottle);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        // Fixed objects drawn here (after camera setting)
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarEndboss);



        // draw() loaded again and again
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}