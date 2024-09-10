let canvas;
let world;
let keyboard = new Keyboard();
let isOn = true;
let isOnStart = false;

function startIntroMusic() {
    intro_music.loop = true;
    intro_music.volume = 0.3;
    intro_music.pause();
}

function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    document.getElementById('start-screen-overlay').classList.add('d-none');
    intro_music.pause();
    chicken_sound.loop = true;
    chicken_sound.volume = 0.5;
    chicken_sound.play();
}

function replayGame() {
    window.location.reload();
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }

window.addEventListener("keydown", (e) => {
    // console.log(e);
    
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    };
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    };
    if (e.keyCode == 38) {
        keyboard.UP = true;
    };
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    };
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    };
    if (e.keyCode == 68) {
        keyboard.KEY_D = true
    }
})

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    };
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    };
    if (e.keyCode == 38) {
        keyboard.UP = false;
    };
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    };
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    };
    if (e.keyCode == 68) {
        keyboard.KEY_D = false;
    }
})

function goFullscreen() {
    document.getElementById('fullscreen-icon').classList.add('d-none');
    document.getElementById('fullscreen-exit').classList.remove('d-none');  
    let screen = document.getElementById('canvas-container');
    if (screen.requestFullscreen) {
        screen.requestFullscreen();
    } else if (screen.mozRequestFullScreen) { // Firefox
        screen.mozRequestFullScreen();
    } else if (screen.webkitRequestFullscreen) { // Chrome, Safari, Opera
        screen.webkitRequestFullscreen();
    } else if (screen.msRequestFullscreen) { // IE/Edge
        screen.msRequestFullscreen();
    }
}

function goFullscreenStart() {
    document.getElementById('fullscreen-start').classList.add('d-none');
    document.getElementById('fullscreen-exit-start').classList.remove('d-none');   
    let startScreen = document.getElementById("start-screen");
    if (startScreen.requestFullscreen) {
        startScreen.requestFullscreen();
    } else if (startScreen.mozRequestFullScreen) { // Firefox
        startScreen.mozRequestFullScreen();
    } else if (startScreen.webkitRequestFullscreen) { // Chrome, Safari, Opera
        startScreen.webkitRequestFullscreen();
    } else if (startScreen.msRequestFullscreen) { // IE/Edge
        startScreen.msRequestFullscreen();
    }
}

function exitFullscreen() {
    document.getElementById('fullscreen-start').classList.remove('d-none');
    document.getElementById('fullscreen-exit-start').classList.add('d-none');   
    document.getElementById('fullscreen-icon').classList.remove('d-none');
    document.getElementById('fullscreen-exit').classList.add('d-none');   
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

function toggleSound() {
    let soundIcon = document.getElementById('sound-switch');
    let on = 'http://127.0.0.1:5500/img/icons/sound-on.svg';
    let off = 'http://127.0.0.1:5500/img/icons/sound-off.svg';
    if (isOn) {
        muteAllSounds();
        soundIcon.src = off;
        isOn = false;       
    } else {
        unmuteAllSounds();
        soundIcon.src = on;
        isOn = true;
    }
}

function muteAllSounds() {
    chicken_sound.muted = true;
    walking_sound.muted = true;
    hurt_sound.muted = true;
    endboss_dies.muted = true;
    endboss_alert.muted = true;
    salsa_splat.muted = true;
    endboss_ishurt.muted = true;
    cashing.muted = true;
    pop.muted = true;
}

function unmuteAllSounds() {
    chicken_sound.muted = false;
    walking_sound.muted = false;
    hurt_sound.muted = false;
    endboss_dies.muted = false;
    endboss_alert.muted = false;
    salsa_splat.muted = false;
    endboss_ishurt.muted = false;
    cashing.muted = false;
    pop.muted = false;
}

function toggleSoundStartscreen() {
    document.getElementById('start-arrow').classList.add('d-none');
    let soundIcon = document.getElementById('start-sound-switch');
    let on = 'http://127.0.0.1:5500/img/icons/sound-on.svg';
    let off = 'http://127.0.0.1:5500/img/icons/sound-off.svg';
    if (isOnStart) {
        soundIcon.src = off;
        isOnStart = false;       
    } else {
        soundIcon.src = on;
        isOnStart = true;
    }
    return intro_music.paused ? intro_music.play() : intro_music.pause();
}

function moveHintArrow() {
    let arrow = document.getElementById('start-arrow');
    setInterval(() => {
        arrow.classList.add('move-right');
        setTimeout(() =>{
            arrow.classList.remove('move-right');
        },250)
    },700)
}
