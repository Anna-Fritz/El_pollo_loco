class Character extends MovableObjects {
    x = 120;
    width = 140;
    height = 140 * 1.97;
    speed = 10;

    offset = {
        top: 120,
        left: 32,
        right: 38,
        bottom: 15
    };

    world;
    audioPlayed = false;
    isSleeping = false;
    idle = true;
    longIdle = null;
    currentAnimation = null;
    frameIndex = 0;
    animationTimers = { animateDeath: 0, animateHurt: 0 , animateJump: 0, animateWalk: 0, animateIdle: 0, animateLongIdle: 0};
    startTimer;
    startIdle;
    startNap;
    idleTime;
    
    animations = {
        animateDeath: { 
            frames: [
                'img/2_character_pepe/5_dead/D-51.png',
                'img/2_character_pepe/5_dead/D-52.png',
                'img/2_character_pepe/5_dead/D-53.png',
                'img/2_character_pepe/5_dead/D-54.png',
                'img/2_character_pepe/5_dead/D-55.png',
                'img/2_character_pepe/5_dead/D-56.png',
                'img/2_character_pepe/5_dead/D-57.png',
            ], 
            speed: 150 
        },
        animateHurt: { 
            frames: [
                'img/2_character_pepe/4_hurt/H-41.png',
                'img/2_character_pepe/4_hurt/H-42.png',
                'img/2_character_pepe/4_hurt/H-43.png'
            ], 
            speed: 100 
        },
        animateJump: { 
            frames: [
                'img/2_character_pepe/3_jump/J-31.png',
                'img/2_character_pepe/3_jump/J-32.png',
                'img/2_character_pepe/3_jump/J-33.png',
                'img/2_character_pepe/3_jump/J-34.png',
                'img/2_character_pepe/3_jump/J-35.png',
                'img/2_character_pepe/3_jump/J-36.png',
                'img/2_character_pepe/3_jump/J-37.png',
                'img/2_character_pepe/3_jump/J-38.png',
                'img/2_character_pepe/3_jump/J-39.png',
            ], 
            speed: 125 
        },
        animateWalk: { 
            frames: [
                'img/2_character_pepe/2_walk/W-21.png',
                'img/2_character_pepe/2_walk/W-22.png',
                'img/2_character_pepe/2_walk/W-23.png',
                'img/2_character_pepe/2_walk/W-24.png',
                'img/2_character_pepe/2_walk/W-25.png',
                'img/2_character_pepe/2_walk/W-26.png',
            ], 
            speed: 110 
        },
        animateIdle: { 
            frames: [
                'img/2_character_pepe/1_idle/idle/I-1.png',
                'img/2_character_pepe/1_idle/idle/I-2.png',
                'img/2_character_pepe/1_idle/idle/I-3.png',
                'img/2_character_pepe/1_idle/idle/I-4.png',
                'img/2_character_pepe/1_idle/idle/I-5.png',
                'img/2_character_pepe/1_idle/idle/I-6.png',
                'img/2_character_pepe/1_idle/idle/I-7.png',
                'img/2_character_pepe/1_idle/idle/I-8.png',
                'img/2_character_pepe/1_idle/idle/I-9.png',
                'img/2_character_pepe/1_idle/idle/I-10.png',
            ], 
            speed: 200 
        },
        animateLongIdle: { 
            frames: [
                'img/2_character_pepe/1_idle/long_idle/I-11.png',
                'img/2_character_pepe/1_idle/long_idle/I-12.png',
                'img/2_character_pepe/1_idle/long_idle/I-13.png',
                'img/2_character_pepe/1_idle/long_idle/I-14.png',
                'img/2_character_pepe/1_idle/long_idle/I-15.png',
                'img/2_character_pepe/1_idle/long_idle/I-16.png',
                'img/2_character_pepe/1_idle/long_idle/I-17.png',
                'img/2_character_pepe/1_idle/long_idle/I-18.png',
                'img/2_character_pepe/1_idle/long_idle/I-19.png',
                'img/2_character_pepe/1_idle/long_idle/I-20.png',
            ], 
            speed: 200 
        },
    };

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.animations.animateWalk.frames);
        this.loadImages(this.animations.animateJump.frames);
        this.loadImages(this.animations.animateHurt.frames);
        this.loadImages(this.animations.animateDeath.frames);
        this.loadImages(this.animations.animateIdle.frames);
        this.loadImages(this.animations.animateLongIdle.frames);
        this.applyGravity();
        this.move();
        this.animate();
    }

    /**
     * checks for keyboard input to move character right or left, make it jump if it's on the ground, and update the camera's position based on the character's x-coordinate
     */
    move() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.startEndbossAlertSound();
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }

    /**
     * plays an end boss alert sound when the character's x-coordinate reaches 2000 and ensures that the sound is played only once by checking the audioPlayed state
     */
    startEndbossAlertSound() {
        if (!this.audioPlayed && this.x == 2000) {
            final_alert.play();
            setTimeout(() => {
                endboss_alert.play();
                finalsound.play();
            },1000);
            this.audioPlayed = true;
        }    
    }

    /**
     * manages character animations by checking various conditions, setting the appropriate animation state, and updating the animation frame when needed
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.resetLongIdle();
                this.setAnimation("animateDeath");
            } else if (this.isHurt()) {
                this.resetLongIdle();
                this.setAnimation("animateHurt");
            } else if (this.isAboveGround()) {
                this.resetLongIdle();
                this.setAnimation("animateJump");
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.resetLongIdle();
                this.setAnimation("animateWalk");
            } else if (this.idleCondition()) {
                this.setAnimation("animateIdle");
                this.startNewNap();
            } else {
                this.sleepingAnimation();
            }
            if (this.currentAnimation) {    // update the frame for current animation, when the time has come
                this.updateAnimationFrame();
            }        
        }, 50);
    }

    /**
     * starts a new 4-second timer for entering a "sleeping" state
     */
    startNewNap() {
        if (this.startTimer) {
            this.startIdle = new Date().getTime();
            this.startTimer = false;
        }
        this.startNap = new Date().getTime();
        this.idleTime = this.startNap - this.startIdle;
        if (this.idleTime >= 4000) {  
            snoring.play();
            this.isSleeping = true;
            this.idle = false;
        } 
    }

    /**
     * triggers the "animateLongIdle" animation and sets the character's idle state to false when the character is in a sleeping state
     */
    sleepingAnimation() {
        if (this.isSleeping) {
            this.setAnimation("animateLongIdle");
        }
    }

    /**
     * checks if the character is not dead, not hurt, not in the air, not moving left or right, and is idle, returning true if all conditions are met
     * @returns an if statement condition
     */
    idleCondition() {
        return !this.isDead() && !this.isHurt() && !this.isAboveGround() && 
               !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && this.idle;
    }

    /**
     * clears the longIdle timeout, resets the longIdle variable to null, sets isSleeping to false, and ensures the character is in an idle state
     */
    resetLongIdle() {
        this.longIdle = null;
        this.isSleeping = false;
        this.idle = true;
        this.startTimer = true;
        snoring.pause();
    }
    
    /**
     * sets the current animation to the specified animationName, resets the frameIndex to 0, and initializes the timer for the new animation
     * @param {string} animationName name of current animation
     */
    setAnimation(animationName) {
        if (this.currentAnimation !== animationName) {
            this.currentAnimation = animationName;
            this.frameIndex = 0;
            this.animationTimers[animationName] = 0; // reset timer
        }
    }

    /**
     * updates the animation frame based on the elapsed time, plays the current frame of the animation, and loops through the frames at the specified speed
     */
    updateAnimationFrame() {
        const { frames, speed } = this.animations[this.currentAnimation];
        this.animationTimers[this.currentAnimation] += 50; // 50ms
        if (this.animationTimers[this.currentAnimation] >= speed) {
            this.playCharacterAnimation(frames[this.frameIndex]);
            this.frameIndex = (this.frameIndex + 1) % frames.length;
            this.animationTimers[this.currentAnimation] = 0;
        }
    }
}