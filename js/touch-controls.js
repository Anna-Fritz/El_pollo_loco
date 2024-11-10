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

/**
 * initializes touch control functionality by enabling touch event handlers for jump, left, right, and throw buttons at fullscreen
 */
function bindBtnsPressEventsFullscreen() {
    enableJumpButtonTouchControlsFullscreen();
    enableLeftButtonTouchControlsFullscreen();
    enableRightButtonTouchControlsFullscreen();
    enableThrowButtonTouchControlsFullscreen();
}

/**
 * adds touch event listeners to the jump button at fullscreen
 */
function enableJumpButtonTouchControlsFullscreen() {
    document.getElementById('btnJumpFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJumpFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}

/**
 * adds touch event listeners to the left button at fullscreen
 */
function enableLeftButtonTouchControlsFullscreen() {
    document.getElementById('btnLeftFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeftFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
}

/**
 * adds touch event listeners to the right button at fullscreen
 */
function enableRightButtonTouchControlsFullscreen() {
    document.getElementById('btnRightFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRightFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}

/**
 * adds touch event listeners to the throw button at fullscreen
 */
function enableThrowButtonTouchControlsFullscreen() {
    document.getElementById('btnThrowFullscreen').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.KEY_D = true;
    });

    document.getElementById('btnThrowFullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.KEY_D = false;
    });

}
