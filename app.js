document.querySelector(".back-video").playbackRate=1;
document.querySelector(".raindrops").playbackRate=.8;
const entryPage = document.querySelector('#drop')
const entryButton = document.querySelector('#drop-button')
entryButton.addEventListener("click", toggleEntry)


function toggleEntry(){
// entryPage.classList.toggle('#drop-close')
entryPage.style.display="none"
}