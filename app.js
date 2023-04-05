document.querySelector(".back-video").playbackRate=1;
document.querySelector(".raindrops").playbackRate=.8;

const entryPage = document.querySelector('#drop')
const entryButton = document.querySelector('#drop-button')
const rezButton = document.getElementById('rezButton')
const rez = document.querySelector("#resume")
const closeRez = document.querySelector("#close-rez")
const contactButton = document.getElementById("open-contacts")
const openContacts = document.querySelector("#contacts")
const openProjButton = document.querySelector("#proj-button")
const projToggle = document.querySelector(".proj")

entryButton.addEventListener("click", toggleEntryDrop)
rezButton.addEventListener("click", toggleEntryShow)
closeRez.addEventListener("click", toggleCloseRez)
contactButton.addEventListener("click", toggleOpenContacts)
openProjButton.addEventListener("click", toggleProj)



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
openContacts.scrollIntoView({behavior: 'smooth'})
event.preventDefault()
}

function toggleProj(){
    if(projToggle.style.display === "none"){
        projToggle.style.display = "block"
    } else {
        projToggle.style.display = "none"
    }
}

