let canvas;
let world;
let keyboard = new Keyboard();
let isOn = true;

function startIntroMusic() {
    intro_music.loop = true;
    intro_music.volume = 0.5;
    // intro_music.play();

}

function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    document.getElementById('start-screen-overlay').classList.add('d-none');
    intro_music.pause();
    chicken_sound.loop = true;
    chicken_sound.volume = 0.5;
    // chicken_sound.play();
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

function fullscreen() {
    // let fullscreen = document.getElementById('content');
    // openFullscreen(fullscreen);
    // document.getElementById('fullscreen-icon').classList.add('d-none');
    // document.getElementById('fullscreen-exit').classList.remove('d-none');   
    canvas.requestFullscreen();
}

function exitFullscreen() {
    // document.getElementById('fullscreen-icon').classList.remove('d-none');
    // document.getElementById('fullscreen-exit').classList.add('d-none');   
    canvas.exitFullscreen();
}

// function openFullscreen(elem) {
//     if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//       elem.msRequestFullscreen();
//     }
//   }

//   function closeFullscreen() {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } else if (document.webkitExitFullscreen) { /* Safari */
//       document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) { /* IE11 */
//       document.msExitFullscreen();
//     }
//   }

// window.addEventListener("resize", () => {
//     // Resize canvas element
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
  
//     // Update scaling
//     // . . .
  
//     // Adjust size dependent properties
//     // . . .
  
//     // Redraw canvas
//     draw();
//   });

function toggleSound() {
    let soundIcon = document.getElementById('sound-switch');
    let on = 'http://127.0.0.1:5500/img/icons/sound-on.svg';
    let off = 'http://127.0.0.1:5500/img/icons/sound-off.svg';
    if (isOn) {
        soundIcon.src = off;
        isOn = false;
        pauseAllSounds();
        
    } else {
        soundIcon.src = on;
        isOn = true;
        // resumeAllSounds();
    }
}

function pauseAllSounds() {
    document.addEventListener('play', function(e){
        var audios = document.getElementsByTagName('audio');
        for(var i = 0, len = audios.length; i < len;i++){
            if(audios[i] != e.target){
                audios[i].pause();
            }
        }
    }, true);
    // audioContext.suspend();  
}

function resumeAllSounds() {
    audioContext.resume();   // Setzt den Audio-Kontext fort
}