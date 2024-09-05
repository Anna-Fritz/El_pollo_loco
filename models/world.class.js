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
        // setInterval(() => {
        //     this.checkBossHit();
        // }, 300);

        setInterval(() => {
            this.checkCollisions();
            this.checkCollection();
        }, 100);

        setInterval(() => {
            this.checkThrowObjects();
            this.checkBossHit();
        }, 350);

        setInterval(() => {
            this.removeEnemy();
        }, 2500);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                enemy.energy = 0;
                console.log(enemy);
            }; 
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy)
            };
        });
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusBarHealth.setPercentage(this.character.energy)
        };
    }

    checkBossHit() {
        this.throwableObjects.forEach((bottle) => {
            if (this.endboss.isColliding(bottle) && this.endboss.energy > 0) {
                console.log("boss is hit");
                this.endboss.endbossHit();
                this.statusBarEndboss.setPercentage(this.endboss.energy);
                bottle.bottleIntact -= 20;
            }
        });
    }

    checkCollection() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                let cashing = new Audio('audio/coin-received.mp3');
                cashing.volume = 0.2;
                cashing.play();
                this.statusBarCoin.isCollected();
                this.statusBarCoin.collectCoins(this.statusBarCoin.wallet); 
                this.removeCoins(index);
            }
        })
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                let pop = new Audio('audio/bottle-pop.mp3');
                pop.volume = 0.5;
                pop.play();
                this.statusBarBottle.isCollected();
                this.statusBarBottle.collectBottles(this.statusBarBottle.bottleBag);
                this.removeBottles(index); 
            }
        })
    }

    removeCoins(index) {
        // this.level.coins.forEach((coin) => {
        //     let index = this.level.coins.indexOf(coin);
            if (index > -1) {
                this.level.coins.splice(index, 1);
            }
        // })
    }

    removeBottles(index) {
        // this.level.bottles.forEach((bottle) => {
        //     let index = this.level.bottles.indexOf(bottle);
            if (index > -1) {
                this.level.bottles.splice(index, 1);
            }
        // })
    }


    removeEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.energy == 0) {
                if (index > -1) {
                   this.level.enemies.splice(index, 1);
                }
            }   
        })
    }

    checkThrowObjects() {
        if(this.keyboard.KEY_D && !this.statusBarBottle.bottleBag == 0) {
            let newBottle = new Bottle(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(newBottle);
            this.statusBarBottle.isThrown();
            this.statusBarBottle.collectBottles(this.statusBarBottle.bottleBag);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
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