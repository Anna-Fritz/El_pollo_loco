class GameEnd extends MovableObjects{
    IMAGES_WIN = [
        'img/9_intro_outro_screens/win/win3.png',
        'img/9_intro_outro_screens/win/win_2.png'
    ];
    IMAGE_YOU_LOST = [
        'img/9_intro_outro_screens/game_over/oh_no_you_lost.png',
    ];
    IMAGE_GAMEOVER = [
        'img/9_intro_outro_screens/game_over/game_over.png'
    ];

    won = false;
    lost = false;

    constructor(x, y, width, height, path) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.loadImages(this.IMAGES_WIN)
        this.loadImages(this.IMAGE_YOU_LOST);
        this.loadImages(this.IMAGE_GAMEOVER);
    }

    /**
     * checks the game status to play either a victory animation with a sparkle effect or a defeat animation, stopping the game accordingly
     */
    animate() {
            if (this.won) {
                this.sparkleWin();
                this.stopGameAfterVictory();
                
            } else if (this.lost) {
                this.playAnimation(this.IMAGE_YOU_LOST)
                this.stopGameAfterDefeat();
                }
            chicken_sound.pause();
            endboss_alert.pause(); 
            snoring.pause();   
            finalsound.pause();
    }

    /**
     * continuously plays the winning animation to create a sparkling effect
     */
    sparkleWin() {
        setInterval(() =>{
            this.playAnimation(this.IMAGES_WIN);
        }, 200);    
    }

    /**
     * stops game after victory by clearing all intervals
     */
    stopGameAfterVictory() {
        setTimeout(() => {
            document.getElementById('replay-btn').classList.remove('d-none');
            clearAllIntervals();
        }, 2000);
    }

    /**
     * stops game after defeat by clearing all intervals
     */
    stopGameAfterDefeat() {
        setTimeout(() => {
            this.playAnimation(this.IMAGE_GAMEOVER);
            document.getElementById('replay-btn').classList.remove('d-none');
            clearAllIntervals(); 
        },1500);
    }
} 