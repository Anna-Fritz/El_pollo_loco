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
    gameEndImages = [];
    gameRunning = true;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        // setInterval(() => {
        //     this.checkCollisions();
        // }, 50);

        setInterval(() => {
            // this.checkCollisions();
            this.checkCollection();
            this.checkHitByBottle();
            this.checkBottleHitsGround();
        }, 100);


        setInterval(() => {
            this.checkBossHit();
        }, 400);

        setInterval(() => {
            this.checkThrowObjects();
        }, 300);



        setInterval(() => {
            this.removeEnemy();
            if (this.gameRunning) {
                this.checkGameEnd();
            }
        }, 2000);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            this.checkHitEnemies(enemy);
            this.checkHitCharacter(enemy)
        });
    }

    checkHitEnemies(enemy) {
        setInterval(() => {
            if (this.character.isCollidingJump(enemy) && this.character.isAboveGround()) {
                enemy.energy = 0;
            }; 
        }, 50);
    }

    checkHitCharacter(enemy) {
        setInterval(() => {
            if (this.character.isColliding(enemy) && enemy.energy > 0 || this.character.isColliding(this.endboss)) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy)
            };
        },150);
    }

    checkHitByBottle() {
        this.throwableObjects.forEach((bottle, index) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    enemy.energy = 0;
                    salsa_splat.volume = 0.3;
                    salsa_splat.play();
                    bottle.animateSplash();
                    return setTimeout(() => {this.throwableObjects.splice(index,1)}, 25)    
                }
            })
        })
        
    }

    checkBossHit() {
        this.throwableObjects.forEach((bottle, index) => {
            if (this.endboss.isColliding(bottle) && this.endboss.energy > 0) {
                this.endboss.endbossHit();
                this.statusBarEndboss.setPercentage(this.endboss.energy);
                endboss_ishurt.play();
                salsa_splat.play();
                bottle.animateSplash();
                setTimeout(() => {
                    this.throwableObjects.splice(index,1);
                }, 300)        
            }
        });
    }

    checkCollection() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                cashing.volume = 0.2;
                cashing.play();
                this.statusBarCoin.isCollected();
                this.statusBarCoin.collectCoins(this.statusBarCoin.wallet); 
                this.removeCoins(index);
            }
        })
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                pop.volume = 0.5;
                pop.play();
                this.statusBarBottle.isCollected();
                this.statusBarBottle.collectBottles(this.statusBarBottle.bottleBag);
                this.removeBottles(index); 
            }
        })
    }

    checkGameEnd() {
        if (this.endboss.energy == 0) {
            let gameWin = new GameEnd(150, 0, 466, 480, '../img/9_intro_outro_screens/win/win_2.png');
            gameWin.won = true;
            this.gameEndImages.push(gameWin);
            gameWin.animate();
            console.log("you won, world");

            this.gameRunning = false;
            // chicken_sound.pause();
            // endboss_alert.pause();
            // this.stopGame();   
            setTimeout(() => {
                // window.location.reload();
                // document.getElementById('start-screen-overlay').classList.remove('d-none');
            }, 3000);     

        } else if (this.character.energy == 0) {

            let gameLost = new GameEnd(0, 0, 720, 480,'../img/9_intro_outro_screens/game_over/game_over.png');
            gameLost.lost = true;
            this.gameEndImages.push(gameLost);
            gameLost.animate();
            this.gameRunning = false;
            console.log("you lost, world");
            // this.clearAllIntervals();
            // chicken_sound.pause();
            // endboss_alert.pause();
            // this.stopGame();
            setTimeout(() => {
                // window.location.reload();
                // document.getElementById('start-screen-overlay').classList.remove('d-none');
            }, 3000);     
        } 
        
    }
    
    stopGame() {

        // setTimeout(() => {
        //     document.getElementById('start-screen-overlay').classList.remove('d-none');
        // }, 2000); 
        
        this.clearAllIntervals();
        this.gameRunning = false;
        chicken_sound.pause();
        endboss_alert.pause();    

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
        if(this.keyboard.KEY_D && !this.statusBarBottle.bottleBag == 0 && this.character.otherDirection) {
            let newBottle = new Bottle(this.character.x + 50, this.character.y + 100);
            newBottle.animate();
            newBottle.throwLeft(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(newBottle);
            this.statusBarBottle.isThrown();
            this.statusBarBottle.collectBottles(this.statusBarBottle.bottleBag);

        } else if(this.keyboard.KEY_D && !this.statusBarBottle.bottleBag == 0) {
            let newBottle = new Bottle(this.character.x + 50, this.character.y + 100);
            newBottle.animate();
            newBottle.throw(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(newBottle);
            this.statusBarBottle.isThrown();
            this.statusBarBottle.collectBottles(this.statusBarBottle.bottleBag);
        }
    }

    checkBottleHitsGround() {
        this.throwableObjects.forEach((bottle, index) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.y > 310 && !enemy.isColliding(bottle) && !this.endboss.isColliding(bottle)) {
                    this.throwableObjects.splice(index,1);
                    pop.play();
                    let newBottle = new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
                    newBottle.x = bottle.x;
                    newBottle.y = bottle.y + Math.random() * 10;
                    this.level.bottles.push(newBottle);
                } 
            });
            if (bottle.y > 310 && !this.endboss.isColliding(bottle) && this.level.enemies.length == 0) {
                this.throwableObjects.splice(index,1);
                pop.play();
                let newBottle = new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
                newBottle.x = bottle.x;
                newBottle.y = bottle.y + Math.random() * 10;
                this.level.bottles.push(newBottle);
            }       
        });  
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
        this.addObjectsToMap(this.gameEndImages);



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