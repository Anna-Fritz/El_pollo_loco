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

    /**
     * assigns the current game world instance to the character, allowing the character to access and interact with the world properties and methods
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * sets up multiple intervals to repeatedly check game actions
     */
    run() {
        setInterval(() => {
            this.checkCollectionCoins();
            this.checkCollectionBottles();
            this.checkHitByBottle();
            this.checkBottleHitsGround();
        }, 100);
        setInterval(() => {this.checkBossHit();}, 400);
        setInterval(() => {this.checkThrowObjects();}, 300);
        setInterval(() => {
            this.removeEnemy();
            if (this.gameRunning) {
                this.checkGameEnd();
            }
        }, 2000);
    }

    /**
     * iterates through all enemies in the level, checking for collisions between the character and each enemy, as well as checking if the character hits the enemies
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            this.checkHitEnemies(enemy);
            this.checkHitCharacter(enemy)
        });
    }

    /**
     * checks if the character collides with a specified enemy while above ground and falling, and if so, it sets the enemy's energy to zero, effectively defeating it
     * @param {*} enemy 
     */
    checkHitEnemies(enemy) {
        setInterval(() => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && this.character.speedY < 0) {
                enemy.energy = 0;
                this.jumpAfterColliding();
            }; 
            this.update();
        }, 1000 / 60);
    }

    /**
     * makes the character jump once after colliding with an enemy, and ensures the jump action is only triggered once by setting the hasJumped flag
     */
    jumpAfterColliding() {
        if (!this.character.hasJumped) {
            this.character.hasJumped = true;
            this.character.jump();
            setTimeout(() => {
                this.character.speedY = 0;
                this.character.y = 155;
            }, 850);
        }
    }

    /**
     * checks if the character is on the ground and resets the hasJumped flag to false, allowing the character to jump again
     */
    update() {
        if (this.character.isOnGround()) {
            this.character.hasJumped = false;
        }
    }

    /**
     * continuously checks if the character collides with a specified enemy or the end boss, and if a collision occurs, it reduces the character's energy and updates the health status bar accordingly
     * @param {*} enemy 
     */
    checkHitCharacter(enemy) {
        setInterval(() => {
            if (this.character.isColliding(enemy) && enemy.energy > 0 || this.character.isColliding(this.endboss)) {
                this.character.hit();
                hurt_sound.play();
                this.statusBarHealth.setPercentage(this.character.energy)
            };
        },150);
    }

    /**
     * checks if any throwable objects, like bottles, collide with enemies, and if a collision occurs, it sets the enemy's energy to zero
     */
    checkHitByBottle() {
        this.throwableObjects.forEach((bottle, index) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    enemy.energy = 0;
                    this.stopBottleAtCollisionPoint(bottle);
                    bottle.animateSplash();
                    return setTimeout(() => {this.throwableObjects.splice(index,1)}, 300)    
                }
            })
        })
    }

    /**
     * stops the bottle's movement at the collision point and plays a sound effect
     * @param {*} bottle 
     */
    stopBottleAtCollisionPoint(bottle) {
        if(bottle.y = 320) {
            bottle.speedX = 0;
            bottle.speedY = 0;
            bottle.acceleration = 0;
            clearInterval(bottle.movementInterval);
            salsa_splat.play();    
        }
    }

    /**
     * checks if any throwable objects, such as bottles, collide with the endboss, and if so, it reduces the endboss's energy, updates the status bar
     */
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

    /**
     * checks for collisions between the character and coins, updating the coin status when a collision is detected, and then removing the collected coin from the level
     */
    checkCollectionCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                cashing.play();
                this.statusBarCoin.isCollected();
                this.statusBarCoin.collectCoins(this.statusBarCoin.wallet); 
                this.removeCoins(index);
            }
        })
    }
    
    /**
     * checks for collisions between the character and bottles, updating the bottle status when a collision is detected, and then removing the collected bottle from the level
     */
    checkCollectionBottles() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                pop.play();
                this.statusBarBottle.isCollected();
                this.statusBarBottle.collectBottles(this.statusBarBottle.bottleBag);
                this.removeBottles(index); 
            }
        })
    }

    /**
     * determines the end of the game by checking the energy levels of the endboss and the character, displaying a win or lose screen accordingly, and then stopping the game
     */
    checkGameEnd() {
        if (this.endboss.energy == 0) {
            let gameWin = new GameEnd(150, 0, 466, 480, 'img/9_intro_outro_screens/win/win_2.png');
            gameWin.won = true;
            this.gameEndImages.push(gameWin);
            gameWin.animate();
            this.gameRunning = false;

        } else if (this.character.energy == 0) {
            let gameLost = new GameEnd(0, 0, 720, 480,'img/9_intro_outro_screens/game_over/game_over.png');
            gameLost.lost = true;
            this.gameEndImages.push(gameLost);
            gameLost.animate();
            loosing.play();
            this.gameRunning = false;
        } 
    }
    
    /**
     * removes a coin from the level's coin array
     * @param {*} index 
     */
    removeCoins(index) {
        if (index > -1) {
            this.level.coins.splice(index, 1);
        }
    }

    /**
     * removes a bottle from the level's bottle array
     * @param {*} index 
     */
    removeBottles(index) {
        if (index > -1) {
            this.level.bottles.splice(index, 1);
        }
    }

    /**
     * iterates through the list of enemies and removes any enemy that has zero energy from the level.
     */
    removeEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.energy == 0) {
                if (index > -1) {
                   this.level.enemies.splice(index, 1);
                }
            }   
        });
        if(this.level.enemies.length == 0) {
            chicken_sound.pause();
        }
    }

    /**
     * checks for keyboard input to throw a bottle in either direction based on the character's facing direction, ensuring that the character has bottles available in their bottle bag
     */
    checkThrowObjects() {
        if(this.keyboard.KEY_D && !this.statusBarBottle.bottleBag == 0 && this.character.otherDirection && !this.character.isSleeping) {
            let newBottle = new Bottle(this.character.x + 50, this.character.y + 100);
            newBottle.animate();
            newBottle.throwLeft(this.character.x + 50, this.character.y + 100);
            this.updateBottleStatus(newBottle);

        } else if(this.keyboard.KEY_D && !this.statusBarBottle.bottleBag == 0 && !this.character.isSleeping) {
            let newBottle = new Bottle(this.character.x + 50, this.character.y + 100);
            newBottle.animate();
            newBottle.throw(this.character.x + 50, this.character.y + 100);
            this.updateBottleStatus(newBottle);
        }
    }

    /**
     * updates the status of the bottle by adding the newly thrown bottle to the list of throwable objects and updating the bottle count in the status bar
     * @param {*} newBottle 
     */
    updateBottleStatus(newBottle) {
        this.throwableObjects.push(newBottle);
        this.statusBarBottle.isThrown();
        this.statusBarBottle.collectBottles(this.statusBarBottle.bottleBag);
    }

    /**
     * checks if throwable bottles have fallen below a certain height and, if so, determines whether they land on the ground or collide with enemies, landing them accordingly
     */
    checkBottleHitsGround() {
        this.throwableObjects.forEach((bottle, index) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.y > 320 && !enemy.isColliding(bottle) && !this.endboss.isColliding(bottle)) {
                    this.landBottleOnGround(bottle, index);
                } 
            });
            if (bottle.y > 320 && !this.endboss.isColliding(bottle) && this.level.enemies.length == 0) {
                this.landBottleOnGround(bottle, index);
            }       
        });  
    }

    /**
     * removes a thrown bottle from the throwable objects array and creates a new bottle object on the ground at the bottle's current position, adding it to the level's bottles array
     * @param {object} bottle 
     * @param {number} index 
     */
    landBottleOnGround(bottle, index) {
        this.throwableObjects.splice(index,1);
        pop.play();
        let newBottle = new BottleOnGround('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        newBottle.x = bottle.x;
        newBottle.y = bottle.y + Math.random() * 10;
        this.level.bottles.push(newBottle);
    }

    /**
     * clears the canvas, adjusts the camera position, renders all game objects, then restores the camera position, and continuously calls itself using requestAnimationFrame to create a smooth animation loop
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawObjects();
        this.ctx.translate(-this.camera_x, 0);
        // Fixed objects drawn here (after camera setting)
        this.drawFixedObjects();
        // draw() loaded again and again
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * renders all dynamic elements of the game, including background objects, clouds, enemies, coins, bottles, the main character, the end boss, and any throwable objects, by adding them to the map for display
     */
    drawObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.throwableObjects);
    }

    /**
     *  adds various fixed elements, such as health and status bars, as well as game end images, to the map for rendering during the game
     */
    drawFixedObjects() {
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarEndboss);
        this.addObjectsToMap(this.gameEndImages);
    }

    /**
     * iterates through an array of objects and calls the addToMap function for each object to draw them on the canvas
     * @param {array} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * checks if the object (mo) is facing the other direction and flips the image accordingly, then draws the object and its frame on the canvas, and finally restores the original orientation if it was flipped
     * @param {*} mo 
     */
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

    /**
     * saves the current drawing context, translates it by the width of the object (mo), applies a horizontal scale transformation to flip the image, and then adjusts the x coordinate of the object to account for the flip
     * @param {*} mo 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
    }

    /**
     * reverses the horizontal position of the given object (mo) and then restores the drawing context
     * @param {*} mo 
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}