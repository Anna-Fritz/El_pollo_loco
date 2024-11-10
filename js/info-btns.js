let infoPopUp = document.getElementById("info-popup");
let legalIsClosed = true;
let pepeIsClosed = true;
let controlLayoutIsClosed = true;

bindBtnsPressEvents();
bindBtnsPressEventsFullscreen();

/**
 * shows or hides a legal notice popup by toggling its visibility and updating its content based on the isClosed state
 */
function toggleLegalNotice() {
  if(legalIsClosed) {
      infoPopUp.classList.remove("d-none");
      infoPopUp.innerHTML = generateLegalNoticeHTML();
      legalIsClosed = false;
      pepeIsClosed = true;
      controlLayoutIsClosed = true;
  } else if (!pepeIsClosed || !controlLayoutIsClosed) {
      infoPopUp.innerHTML = generateLegalNoticeHTML();
  } else {
      infoPopUp.classList.add('d-none');
      legalIsClosed = true;
  }
}  

/**
 * displays or hides a control layout popup by toggling its visibility and updating its content based on the isClosed state
 */
function toggleControlLayout() {
    if(controlLayoutIsClosed) {
        infoPopUp.classList.remove("d-none");
        infoPopUp.innerHTML = generateControlLayoutHTML();
        controlLayoutIsClosed = false;
        pepeIsClosed = true;
        legalIsClosed = true;
      } else if (!pepeIsClosed || !legalIsClosed) {
        infoPopUp.innerHTML = generateControlLayoutHTML();
      } else {
        infoPopUp.classList.add('d-none');
        controlLayoutIsClosed = true;
    }
}  

/**
 * shows or hides a popup containing Pepe's story by toggling its visibility and updating its content based on the isClosed state
 */
function togglePepeStory() {
    if(pepeIsClosed) {
        infoPopUp.classList.remove("d-none");
        infoPopUp.innerHTML = generatePepeStoryHTML();
        pepeIsClosed = false;
        controlLayoutIsClosed = true;
        legalIsClosed = true;
    } else if (!legalIsClosed || !controlLayoutIsClosed) {
        infoPopUp.innerHTML = generatePepeStoryHTML();  
    } else {
        infoPopUp.classList.add('d-none');
        pepeIsClosed = true;
    }
}  

/**
 * hides the popup
 */
function closePopUp() {
    infoPopUp.classList.add('d-none');
    isClosed = true;
}
