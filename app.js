document.querySelector(".back-video").playbackRate=1;
document.querySelector(".raindrops").playbackRate=.8;

const entryPage = document.querySelector('#drop')
const entryButton = document.querySelector('#drop-button')
const rezButton = document.getElementById('rezButton')
const rez = document.querySelector("#resume")
const closeRez = document.querySelector("#close-rez")
const contactButton = document.getElementById("open-contacts")
const openContacts = document.querySelector("#contacts")


entryButton.addEventListener("click", toggleEntryDrop)
rezButton.addEventListener("click", toggleEntryShow)
closeRez.addEventListener("click", toggleCloseRez)
contactButton.addEventListener("click", toggleOpenContacts)

    



function toggleEntryDrop(){
// entryPage.classList.toggle('#drop-close')
entryPage.style.display="none"
}
function toggleEntryShow(){
rez.style.display="block"

}
function toggleCloseRez(){
rez.style.display="none"
}
function toggleOpenContacts(){
openContacts.style.display ="block"
event.preventDefault()
}

