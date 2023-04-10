const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', '4', '9']

const answers = ["CARDINALS", "FALCONS", "PANTHERS","RAVENS", "BILLS", 
"BENGALS","BEARS", "BROWNS", "COWBOYS", "BRONCOS", "LIONS", "TEXANS", 
"PACKERS", "COLTS", "RAMS", "JAGUARS", "VIKINGS", "CHIEFS", "SAINTS", 
"RAIDERS", "GIANTS", "CHARGERS", "EAGLES", "DOLPHINS", "49ERS", "PATRIOTS", 
"SEAHAWKS", "JETS", "BUCCANEERS", "STEELERS", "COMMANDERS", "TITANS"]

const letterAttempt = document.querySelector("#letter-guess")
const guessedLetter = letterAttempt.value.toUpperCase()
const letterButton = document.querySelector("#letter-button")
const grabDiv1 = document.querySelector(".guessed")
const randomTeam = answers[Math.floor(Math.random() * answers.length)];
const numberOfLetters = randomTeam.length
const spaces = " _ ".repeat(numberOfLetters)
const answer = document.querySelector("#answer")
const blankSpaces = document.querySelector("#blank-spaces")
const teamArray = Array.from(randomTeam)
const answerSpaces =document.createElement("p")
answerSpaces.setAttribute("id", "blanks")
const guessNumber = document.querySelector('#guess-number')


document.addEventListener('DOMContentLoaded', createBlankSpaces)
letterButton.addEventListener("click", addGuessedLetter)
letterAttempt.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        addGuessedLetter()
        }
    })

// Creates an array of blank spaces with no white spaces
let arrSpaces =Array.from(spaces);
arrSpaces=arrSpaces.filter(function(str) {
    return /\S/.test(str);
});

// Function to take a guessed letter from the input box and append it 
// to the "Letters Guessed" section
function addGuessedLetter(){
    const triedLetter = document.createElement("p")
    triedLetter.setAttribute("id", "guessed-letter");
    triedLetter.innerText = letterAttempt.value.toUpperCase();
    let contain = false;
    grabDiv1.append(triedLetter)
    teamArray.forEach(function(letter,index){
        if(letter === letterAttempt.value.toUpperCase()){
            arrSpaces[index]=letter
            answerSpaces.innerText = arrSpaces.join(" ")
            contain = true
        }
    })
    if(contain === false){
        const numberOfGuesses = parseInt(guessNumber.innerHTML)-1
        guessNumber.innerHTML = numberOfGuesses
        switch(numberOfGuesses){
            case 4: 
                document.querySelector('#noose1').style.display="block";
                break
            case 3: document.querySelector('#noose2').style.display="block";
                break
            case 2: document.querySelector('#noose3').style.display="block";
                break
            case 1: document.querySelector('#noose4').style.display="block";
                break
            case 0: document.querySelector('#noose5').style.display="block";
        
            answer.innerText = `Answer: ${randomTeam}`
        }

    }
    letterAttempt.value="";
}

function createBlankSpaces(){
    answerSpaces.innerText = spaces
    blankSpaces.append(answerSpaces)
}

