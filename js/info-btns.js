let infoPopUp = document.getElementById("info-popup");
let isClosed = true;

bindBtnsPressEvents();
bindBtnsPressEventsFullscreen();

/**
 * shows or hides a legal notice popup by toggling its visibility and updating its content based on the isClosed state
 */
function toggleLegalNotice() {
  if(isClosed) {
      infoPopUp.classList.remove("d-none");
      infoPopUp.innerHTML = generateLegalNoticeHTML();
      isClosed = false;
  } else {
      infoPopUp.classList.add('d-none');
      isClosed = true;
  }
}  

/**
 * displays or hides a control layout popup by toggling its visibility and updating its content based on the isClosed state
 */
function toggleControlLayout() {
  if(isClosed) {
      infoPopUp.classList.remove("d-none");
      infoPopUp.innerHTML = generateControlLayoutHTML();
      isClosed = false;
  } else {
      infoPopUp.classList.add('d-none');
      isClosed = true;
  }
}  

/**
 * shows or hides a popup containing Pepe's story by toggling its visibility and updating its content based on the isClosed state
 */
function togglePepeStory() {
    if(isClosed) {
        infoPopUp.classList.remove("d-none");
        infoPopUp.innerHTML = generatePepeStoryHTML();
        isClosed = false;
    } else {
        infoPopUp.classList.add('d-none');
        isClosed = true;
    }
}  

/**
 * hides the popup
 */
function closePopUp() {
    infoPopUp.classList.add('d-none');
    isClosed = true;
}
