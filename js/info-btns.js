let infoPopUp = document.getElementById("info-popup");
let isClosed = true;

bindBtnsPressEvents();
bindBtnsPressEventsFullscreen();

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

function closePopUp() {
    infoPopUp.classList.add('d-none');
    isClosed = true;
}
