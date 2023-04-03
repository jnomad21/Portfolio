document.querySelector(".back-video").playbackRate=1;
const entryPage = document.querySelector('#drop')
const entryButton = document.querySelector('#drop-button')
entryButton.addEventListener("click", toggleEntry)


function toggleEntry(){
// entryPage.classList.toggle('#drop-close')
entryPage.style.display="none"
}