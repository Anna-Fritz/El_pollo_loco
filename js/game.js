let canvas;
let world;
let keyboard = new Keyboard();
let isOn = true;
let isOnStart = false;
let isFullscreen = true;
let arrowHint = setInterval(moveHintArrow, 700);
let stopArrow = true;

/**
 * sets the intro music to loop continuously and pauses it initially
 */
function presetMusic() {
    intro_music.loop = true;
    intro_music.volume = 0.1;
    if (localStorage.getItem('isMuted') == null) {
        localStorage.setItem('isMuted', 'true');
        intro_music.pause();
    } else {
        checkSoundStartscreen();
    }
    if (localStorage.getItem('isLoading') == null) {
        localStorage.setItem('isLoading', 'true');
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
 * Initializes the game by either displaying a loading animation or starting the canvas, 
 * checks background music and sound effects based on user settings, and hides the start screen overlay.
 */
function startGame() {
    if (localStorage.getItem('isLoading') === 'true') {
        loadAnimation();
        localStorage.setItem('isLoading', 'false');
    } else {
        startCanvas();
        intro_music.pause();
        checkSound();
        document.getElementById('start-screen-overlay').classList.add('d-none');
        document.getElementById('content').classList.remove('d-none');
    }
}

/**
 * initializes the game world by retrieving the canvas element and creating a new World instance with it and the keyboard controls.
 */
function startCanvas() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * displays the loading animation by adjusting the visibility and styles of elements, initializes the canvas, mutes all sounds, and hides the start screen elements.
 */
function loadAnimation() {
    let bottle = document.getElementById('loading-bottle');
    let text = document.getElementById('loading-text');
    let playBtn = document.getElementById('play-btn')
    bottle.classList.remove('d-none');
    text.classList.remove('d-none');
    playBtn.classList.add('d-none');
    bottle.classList.add('rotating-bottle');
    muteAllSounds();  
    startCanvas(); 
    hideStartScreen(bottle, text, playBtn);
}

/**
 * Hides the start screen by triggering a delayed sequence that replays the game, hides the overlay, and resets the loading elements after a set timeout.
 * 
 * @param {HTMLElement} bottle - The loading bottle element to be hidden.
 * @param {HTMLElement} text - The loading text element to be hidden.
 * @param {HTMLElement} playBtn - The play button element to be shown.
 */
function hideStartScreen(bottle, text, playBtn) {
    hideStartScreen = setTimeout(() => {
        replayGame(); 
        bottle.classList.add('d-none');
        text.classList.add('d-none');
        playBtn.classList.remove('d-none');
        clearTimeout(hideStartScreen);  
        document.getElementById('start-screen-overlay').classList.add('d-none');
        checkSound();
    }, 6000);
}

/**
 * checks if the game restart was requested by retrieving a value from localStorage, and if so, it removes the restart flag and calls reloadGame to reset the game
 */
function checkGameRestart() {
    if (localStorage.getItem('restartGame') === 'true') {
        localStorage.removeItem('restartGame');
        startGame();
    };
    if (localStorage.getItem('backToHome') === 'true') {
        window.location.reload;
    };  
}

/**
 * Sets a flag in local storage to indicate returning to the home screen, then reloads the page to apply the change.
 */
function showHomeScreen() {
    localStorage.setItem('backToHome', 'true');
    window.location.reload();
}

/**
 * reloads the current page to reset and restart the game.
 */
async function replayGame() {
    localStorage.setItem('restartGame', 'true');  // Flag setzen
    window.location.reload();
}

/**
 * stops all active intervals by clearing them in a loop up to ID 9999
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
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
 * checks the sound setting, mute or unmute the sound, updating the sound icon accordingly
 */
function checkSound() {
    let soundIcon = document.getElementById('sound-switch');
    let on = 'img/icons/sound-on.svg';
    let off = 'img/icons/sound-off.svg';
    if (localStorage.getItem('isMuted') === 'false') {
        unmuteAllSounds();
        soundIcon.src = on;
    } else {
        muteAllSounds();
        soundIcon.src = off;
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
    chicken_sound.play();
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
    let soundIcon = document.getElementById('start-sound-switch');
    let on = 'img/icons/sound-on.svg';
    let off = 'img/icons/sound-off.svg';
    if (stopArrow) {
        stopArrow = false;
        stopHintArrow();
        intro_music.play();
        localStorage.setItem('isMuted', 'false');
        soundIcon.src = on;
    } else {
        setSoundStartscreen(soundIcon, on, off);
    }
}

/**
 * checks the sound setting for startscreen music, mute or unmute the sound, updating the sound icon accordingly
 */
function checkSoundStartscreen() {
    let soundIcon = document.getElementById('start-sound-switch');
    let on = 'img/icons/sound-on.svg';
    let off = 'img/icons/sound-off.svg';
    if (localStorage.getItem('isMuted') === 'false') {
        soundIcon.src = on;
        intro_music.play()
    } else {
        soundIcon.src = off;
        intro_music.pause();
   }  
}

/**
 * updates the sound icon based on the current sound state for the start screen, toggles the sound
 * @param {HTMLElement} soundIcon sound button to toggle sound
 * @param {string} on image path
 * @param {string} off image path
 */
function setSoundStartscreen(soundIcon, on, off) {
    if (localStorage.getItem('isMuted') === 'false') {
        soundIcon.src = off;
        intro_music.pause();
        localStorage.setItem('isMuted', 'true');
    } else {
        soundIcon.src = on;
        intro_music.play()
        localStorage.setItem('isMuted', 'false');
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
        },250);
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
