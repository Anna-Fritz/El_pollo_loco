let canvas;
let world;
let keyboard = new Keyboard();
let isOn = true;
let isOnStart = false;
let isFullscreen = true;
let arrowHint = setInterval(moveHintArrow, 700);
let isStarted = false;

/**
 * sets the intro music to loop continuously and pauses it initially
 */
function presetMusic() {
    intro_music.loop = true;
    intro_music.volume = 0.1;
    if (localStorage.getItem('isMuted') == null) {
        localStorage.setItem('isMuted', 'true');
        intro_music.pause();
    }
}

/**
 * presets sound volume
 */
function presetVolume() {
    chicken_sound.loop = true;
    chicken_sound.volume = 0.3;
    hurt_sound.volume = 0.3;
    endboss_dies.volume = 0.2;
    endboss_alert.loop = true;
    endboss_alert.volume = 0.4;
    salsa_splat.volume = 0.3;
    endboss_ishurt.volume = 0.4;
    cashing.volume = 0.1;
    pop.volume = 0.3;
    death_chick.volume = 0.3;
    death_chicken.volume = 0.3;
    winning.volume = 0.3;
    loosing.volume = 0.1;
    snoring.loop = true;
    snoring.volume = 0.5;
    final_alert.volume = 0.3;
    finalsound.loop = true;
    finalsound.volume = 0.4;
}

/**
 *  initializes the game, hides the start screen overlay, pauses the intro music, and starts playing a looping chicken sound
 */
function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('start-screen-overlay').classList.add('d-none');
    intro_music.pause();
    isStarted = true;
    if (localStorage.getItem('isMuted') === 'true') {
        toggleSound();
        toggleSound();
    } else if (localStorage.getItem('isMuted') === 'false') {
        chicken_sound.play();
    }
}

/**
 * checks if the game restart was requested by retrieving a value from localStorage, and if so, it removes the restart flag and calls reloadGame to reset the game
 */
function checkGameRestart() {
    if (localStorage.getItem('restartGame') === 'true') {
        localStorage.removeItem('restartGame');
        reloadGame();
    }
    if (localStorage.getItem('backToHome') === 'true' && localStorage.getItem('isMuted') === 'false') {
        let start = document.getElementById('toggle-sound-startscreen');
        start.click();
        start.click();
        intro_music.play();
    }    
}

function showHomeScreen() {
    localStorage.setItem('backToHome', 'true');
    window.location.reload();
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
    document.getElementById('fullscreen-panel-left').classList.remove('d-none');
    document.getElementById('fullscreen-panel-right').classList.remove('d-none');    
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
    document.getElementById('fullscreen-panel-left').classList.add('d-none');
    document.getElementById('fullscreen-panel-right').classList.add('d-none');    
}

/**
 * toggles fullscreen mode for the start screen, updating the fullscreen icon accordingly and switching the isFullscreen state
 */
function toggleFullscreenStart() {
    let icon = document.getElementById('fullscreen-start-img');
    let on = 'img/icons/fullscreen.svg';
    let off = 'img/icons/fullscreen-exit.svg';
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
    let on = 'img/icons/fullscreen.svg';
    let off = 'img/icons/fullscreen-exit.svg';
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
 * toggles the sound on or off, updating the sound icon accordingly and changing the isMuted state at localStorage
 */
function toggleSound() {
    let soundIcon = document.getElementById('sound-switch');
    let on = 'img/icons/sound-on.svg';
    let off = 'img/icons/sound-off.svg';
    if (localStorage.getItem('isMuted') === 'false') {
        muteAllSounds();
        soundIcon.src = off;
        localStorage.setItem('isMuted', 'true');       
    } else {
        unmuteAllSounds();
        soundIcon.src = on;
        localStorage.setItem('isMuted', 'false');       
    }
}

/**
 * mutes all specified sound effects in the game
 */
function muteAllSounds() {
    chicken_sound.pause();
    walking_sound.muted = true;
    hurt_sound.muted = true;
    endboss_dies.muted = true;
    endboss_alert.muted = true;
    salsa_splat.muted = true;
    endboss_ishurt.muted = true;
    cashing.muted = true;
    pop.muted = true;
    death_chick.muted = true;
    death_chicken.muted = true;
    winning.muted = true;
    loosing.muted = true;
    snoring.muted = true;
    final_alert.muted = true;
    finalsound.muted = true;
}

/**
 * unmutes all specified sound effects in the game
 */
function unmuteAllSounds() {   
    if (isStarted) {
        chicken_sound.play();
    }
    walking_sound.muted = false;
    hurt_sound.muted = false;
    endboss_dies.muted = false;
    endboss_alert.muted = false;
    salsa_splat.muted = false;
    endboss_ishurt.muted = false;
    cashing.muted = false;
    pop.muted = false;
    death_chick.muted = false;
    death_chicken.muted = false;
    winning.muted = false;
    loosing.muted = false;
    snoring.muted = false;
    final_alert.muted = false;
    finalsound.muted = false;
}

/**
 * updates the sound icon based on the current state
 * @returns plays or pauses the intro music depending on whether it is currently paused
 */
function toggleSoundStartscreen() {
    stopHintArrow();
    let soundIcon = document.getElementById('start-sound-switch');
    let on = 'img/icons/sound-on.svg';
    let off = 'img/icons/sound-off.svg';
    checkSoundStartscreen(soundIcon, on, off);
    return intro_music.paused ? intro_music.play() : intro_music.pause();
}

/**
 * updates the sound icon based on the current sound state for the start screen, toggles the sound
 * @param {HTMLElement} soundIcon sound button to toggle sound
 * @param {string} on image path
 * @param {string} off image path
 */
function checkSoundStartscreen(soundIcon, on, off) {
    if (localStorage.getItem('isMuted') === 'false') {
        soundIcon.src = off;
        toggleSound();
    } else {
        soundIcon.src = on;
        toggleSound();
    }  
}

/**
 * animates the hint arrow
 */
function moveHintArrow() {
    if (sessionStorage.getItem('hintArrow') === null) {
        let arrow = document.getElementById('start-arrow');
        arrow.classList.remove('d-none');
        arrow.classList.add('move-right');
        setTimeout(() =>{
            arrow.classList.remove('move-right');
        },250)
    }
}

/**
 * hides the hint arrow
 */
function stopHintArrow() {
    document.getElementById('start-arrow').classList.add('d-none');
    clearInterval(arrowHint);
    sessionStorage.setItem('hintArrow', 'false');
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
