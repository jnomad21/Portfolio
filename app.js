document.querySelector(".back-video").playbackRate=1;
document.querySelector(".raindrops").playbackRate=.8;

const entryPage = document.querySelector('#drop')
const entryButton = document.querySelector('#drop-button')
const rezButton = document.querySelector('rezButton')
const rez = document.querySelector("#resume-show")

entryButton.addEventListener("click", toggleEntryDrop)
rezButton.addEventListener("click", toggleEntryShow)


function toggleEntryDrop(){
// entryPage.classList.toggle('#drop-close')
entryPage.style.display="none"
}
function toggleEntryShow(){
rez.style.display="block"
}