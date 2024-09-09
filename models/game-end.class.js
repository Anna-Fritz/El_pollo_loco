class GameEnd extends MovableObjects{
    IMAGES_WIN = [
        '../img/9_intro_outro_screens/win/win3.png',
        '../img/9_intro_outro_screens/win/win_2.png'
    ];
    IMAGE_YOU_LOST = [
        '../img/9_intro_outro_screens/game_over/oh_no_you_lost.png',
    ];
    IMAGE_GAMEOVER = [
        '../img/9_intro_outro_screens/game_over/game_over.png'
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

    animate() {
            if (this.won) {
                this.sparkleWin();
                setTimeout(() => {
                    document.getElementById('replay-btn').classList.remove('d-none');
                    clearAllIntervals();
                    this.sparkleWin(); 
                }, 2000);
                
            } else if (this.lost) {
                this.playAnimation(this.IMAGE_YOU_LOST)
                setTimeout(() => {
                    this.playAnimation(this.IMAGE_GAMEOVER);
                    document.getElementById('replay-btn').classList.remove('d-none');
                    clearAllIntervals(); 
                },1500);
                }
            chicken_sound.pause();
            endboss_alert.pause();    
    }

    sparkleWin() {
        setInterval(() =>{
            this.playAnimation(this.IMAGES_WIN);
        }, 200);    
    }
} 