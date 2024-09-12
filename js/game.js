let canvas;
let world;
let keyboard = new Keyboard();
let isOn = true;
let isOnStart = false;
let isFullscreen = true;
let arrowHint = setInterval(moveHintArrow, 700);


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

function bindBtnsPressEvents() {
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });


    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });


    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });


    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.KEY_D = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.KEY_D = false;
    });

}

function bindBtnsPressEventsFullscreen() {
    document.getElementById('btnJumpFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJumpFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });


    document.getElementById('btnLeftFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeftFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });


    document.getElementById('btnRightFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRightFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });


    document.getElementById('btnThrowFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.KEY_D = true;
    });

    document.getElementById('btnThrowFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.KEY_D = false;
    });

}


function goFullscreen() {
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
    if (window.matchMedia('(hover: none)')) {
        document.getElementById('fullscreen-panel-left').classList.add('d-none');
        document.getElementById('fullscreen-panel-right').classList.add('d-none');    
    }
}

function goFullscreenStart() {
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

function exitFullscreenStart() {
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


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
    if (!window.matchMedia('(hover: none)')) {
        document.getElementById('fullscreen-panel-left').classList.remove('d-none');
        document.getElementById('fullscreen-panel-right').classList.remove('d-none');    
    }
}

function toggleFullscreenStart() {
    let icon = document.getElementById('fullscreen-start-img');
    let on = 'http://127.0.0.1:5500/img/icons/fullscreen.svg';
    let off = 'http://127.0.0.1:5500/img/icons/fullscreen-exit.svg';
    if (isFullscreen) {
        goFullscreenStart();
        icon.src = off;
        isFullscreen = false
    } else {
        exitFullscreenStart();
        icon.src = on;
        isFullscreen = true;
    }
}

function toggleFullscreen() {
    let icon = document.getElementById('fullscreen-img');
    let on = 'http://127.0.0.1:5500/img/icons/fullscreen.svg';
    let off = 'http://127.0.0.1:5500/img/icons/fullscreen-exit.svg';
    if (isFullscreen) {
        goFullscreen();
        // goFullscreenStart();
        icon.src = off;
        isFullscreen = false
    } else {
        exitFullscreen();
        icon.src = on;
        isFullscreen = true;
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
    stopHintArrow();
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
    arrow.classList.add('move-right');
    setTimeout(() =>{
        arrow.classList.remove('move-right');
    },250)
}

function stopHintArrow() {
    document.getElementById('start-arrow').classList.add('d-none');
    clearInterval(arrowHint);
}

function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    }
    else {
        document.getElementById('canvas').style.height = `100%`;
    }
}
