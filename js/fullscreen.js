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
    setPanelsToFullscreen();
}

/**
 * sets the display to fullscreen mode by showing fullscreen panels and hiding control panels on the left and right sides of the screen
 */
function setPanelsToFullscreen() {
    document.getElementById('fullscreen-panel-left').classList.remove('d-none');
    document.getElementById('fullscreen-panel-right').classList.remove('d-none');
    document.getElementById('control-panel-left').classList.add('d-none');
    document.getElementById('control-panel-right').classList.add('d-none');    
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
    resetPanels();
}

/**
 * resets the display by hiding fullscreen panels and showing control panels on the left and right sides of the screen
 */
function resetPanels() {
    document.getElementById('fullscreen-panel-left').classList.add('d-none');
    document.getElementById('fullscreen-panel-right').classList.add('d-none');    
    document.getElementById('control-panel-left').classList.remove('d-none');
    document.getElementById('control-panel-right').classList.remove('d-none');    
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
