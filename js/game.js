let canvas;
let world;
let keyboard = new Keyboard();


function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    document.getElementById('start-screen-overlay').classList.add('d-none');
    chicken_sound.loop = true;
    chicken_sound.volume = 0.5;
    chicken_sound.play();
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