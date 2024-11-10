let canvas;
let world;
let keyboard = new Keyboard();
let isOn = true;
let isOnStart = false;
let isFullscreen = true;
let arrowHint = setInterval(moveHintArrow, 700);

/**
 * sets the intro music to loop continuously and pauses it initially
 */
function startIntroMusic() {
    intro_music.loop = true;
    intro_music.volume = 0.1;
    intro_music.pause(); 
}

/**
 *  initializes the game, hides the start screen overlay, pauses the intro music, and starts playing a looping chicken sound
 */
function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('start-screen-overlay').classList.add('d-none');
    intro_music.pause();
    chicken_sound.loop = true;
    chicken_sound.volume = 0.5;
    chicken_sound.play();
}

/**
 * checks if the game restart was requested by retrieving a value from localStorage, and if so, it removes the restart flag and calls reloadGame to reset the game
 */
function checkGameRestart() {
    if (localStorage.getItem('restartGame') === 'true') {
        localStorage.removeItem('restartGame');
        reloadGame();
    }    
}

/**
 * reloads the current page to reset and restart the game.
 */
function replayGame() {
    localStorage.setItem('restartGame', 'true');  // Flag setzen
    window.location.reload();
}

/**
 *  simulates a click on the "play-special-btn" button element to initiate a game restart.
 */
function reloadGame() {
    let start = document.getElementById('play-btn');
    start.click();
}

/**
 * stops all active intervals by clearing them in a loop up to ID 9999
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }

/**
* listens for specific keydown events and updates the keyboard object to mark the right, left, up, down, space, and "D" keys as pressed
*/
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

/**
 * detects when specific keys are released and updates the keyboard object to mark the right, left, up, down, space, and "D" keys as not pressed
 */
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

/**
 * initializes touch control functionality by enabling touch event handlers for jump, left, right, and throw buttons
 */
function bindBtnsPressEvents() {
    enableJumpButtonTouchControls();
    enableLeftButtonTouchControls();
    enableRightButtonTouchControls();
    enableThrowButtonTouchControls();
}

/**
 * adds touch event listeners to the jump button
 */
function enableJumpButtonTouchControls() {
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}

/**
 * adds touch event listeners to the left button
 */
function enableLeftButtonTouchControls() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
}

/**
 * adds touch event listeners to the right button
 */
function enableRightButtonTouchControls() {
    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}

/**
 * adds touch event listeners to the throw button
 */
function enableThrowButtonTouchControls() {
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

/**
 * attempts to make the canvas container element enter fullscreen mode across different browsers
 */
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

/**
 * attempts to make the start screen element enter fullscreen mode, using the appropriate method for different browsers
 */
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

/**
 *  attempts to exit fullscreen mode using the appropriate method for different browsers
 */
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

/**
 * exits fullscreen mode using the appropriate method for different browsers
 */
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

/**
 * toggles fullscreen mode for the start screen, updating the fullscreen icon accordingly and switching the isFullscreen state
 */
function toggleFullscreenStart() {
    let icon = document.getElementById('fullscreen-start-img');
    let on = '../img/icons/fullscreen.svg';
    let off = '../img/icons/fullscreen-exit.svg';
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

/**
 * toggles fullscreen mode for the canvas, updates the fullscreen icon accordingly, and switches the isFullscreen state
 */
function toggleFullscreen() {
    let icon = document.getElementById('fullscreen-img');
    let on = '../img/icons/fullscreen.svg';
    let off = '../img/icons/fullscreen-exit.svg';
    if (isFullscreen) {
        goFullscreen();
        icon.src = off;
        isFullscreen = false
    } else {
        exitFullscreen();
        icon.src = on;
        isFullscreen = true;
    }
}

/**
 * toggles the sound on or off, updating the sound icon accordingly and changing the isOn state
 */
function toggleSound() {
    let soundIcon = document.getElementById('sound-switch');
    let on = '../img/icons/sound-on.svg';
    let off = '../img/icons/sound-off.svg';
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

/**
 * mutes all specified sound effects in the game
 */
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

/**
 * unmutes all specified sound effects in the game
 */
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

/**
 * updates the sound icon based on the current state
 * @returns plays or pauses the intro music depending on whether it is currently paused
 */
function toggleSoundStartscreen() {
    stopHintArrow();
    let soundIcon = document.getElementById('start-sound-switch');
    let on = '../img/icons/sound-on.svg';
    let off = '../img/icons/sound-off.svg';
    checkSoundStartscreen(soundIcon, on, off);
    return intro_music.paused ? intro_music.play() : intro_music.pause();
}

/**
 * updates the sound icon based on the current sound state for the start screen, toggles the sound, and adjusts the isOnStart and isOn states accordingly
 * @param {HTMLElement} soundIcon sound button to toggle sound
 * @param {string} on image path
 * @param {string} off image path
 */
function checkSoundStartscreen(soundIcon, on, off) {
    if (isOnStart) {
        soundIcon.src = off;
        isOnStart = false;  
        isOn = true;
        toggleSound();
    } else {
        soundIcon.src = on;
        isOnStart = true;
        isOn = false;
        toggleSound();
    }  
}

/**
 * animates the hint arrow
 */
function moveHintArrow() {
    let arrow = document.getElementById('start-arrow');
    arrow.classList.add('move-right');
    setTimeout(() =>{
        arrow.classList.remove('move-right');
    },250)
}

/**
 * hides the hint arrow
 */
function stopHintArrow() {
    document.getElementById('start-arrow').classList.add('d-none');
    clearInterval(arrowHint);
}

/**
 * adjusts the height of the canvas element based on the current screen orientation
 */
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
