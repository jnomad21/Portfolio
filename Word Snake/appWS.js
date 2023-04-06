// MODEL => HOLDS THE STATE OF THE APPLICATION
const wordsUsed = [];
// CACHED DOM ELEMENTS
const wordsListElement = document.querySelector("#words-list")
const addWordButtonElement = document.querySelector("#add-word-button")
const newWordInputElement = document.querySelector("#new-word-input")
newWordInputElement.focus;
const incorrectResultMessage = document.querySelector("p")
incorrectResultMessage.style.color = "Red"


// VIEW
// WHEN THE APP STATE CHANGES, RE-RENDER THE VIEW
function renderList(){
    wordsListElement.innerHTML = "";
    // Loop through all the words in wordsUsed
    wordsUsed.forEach(function(word){
        // Create a new list item
        const newListItem = document.createElement('li');
        newListItem.setAttribute("class", "bullet");   
        // Set the list item's text equal to that word
        newListItem.innerText = word;
        // Append the list item to my #words-list
        wordsListElement.append(newListItem)
    })
}
// CONTROLLER


function handleWordAdd(newWord){
    if(wordsUsed.length === 0){
        wordsUsed.push(newWord);
        return renderList();
    }
    const firstLetterOfNewWord = newWord[0];
    const lastWordInList = wordsUsed[wordsUsed.length - 1];
    const lastLetterOfLastWordInList = lastWordInList[lastWordInList.length - 1];
    const errLastLetter = lastLetterOfLastWordInList.toUpperCase()
        

        
    if(lastLetterOfLastWordInList === firstLetterOfNewWord){
        wordsUsed.push(newWord)
        renderList();
        incorrectResultMessage.innerHTML=""
        newWordInputElement1=lastLetterOfLastWordInList
        newWordInputElement.value=`${newWordInputElement1}`
    }else{
        incorrectResultMessage.innerHTML= `THIS IS NOT A VALID SUBMISSION! <br>Your new word needs to start with the letter <br>${errLastLetter}`
        
        
    }
}
const clearErrMessage= document.querySelector('p')
function respondToWordSubmit(){
    // Grab the text from the input
    const newWordToAdd = newWordInputElement.value.toUpperCase();
    // Call the handleWordAdd function using that text
    handleWordAdd(newWordToAdd)
    // Clear the input field
    newWordInputElement.value = "";
    
    
}
// SET UP EVENT LISTENERS
addWordButtonElement.addEventListener("click", respondToWordSubmit)
newWordInputElement.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        respondToWordSubmit()
        
        }
    })

