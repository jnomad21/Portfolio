const player = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  }
  
  const choices= ["Lapis", "Papyrus", "Scalpellus"];
  
  document.getElementById('lapis').onclick = function(e){
    player.currentChoice = "Lapis";
    compareChoices();
  }
  document.getElementById('papyrus').onclick = function(e){
    player.currentChoice = "Papyrus";
    compareChoices();
  }
  document.getElementById('scalpellus').onclick = function(e){
    player.currentChoice = "Scalpellus";
    compareChoices();
  }
  
  function computerChooses(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  
  function compareChoices(){
    computerChooses();
  if(computer.currentChoice === player.currentChoice) {
    showResult("It's a tie! Machina and Homo Sapien both chose " + computer.currentChoice)
  
  }else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
    showResult ("Homo Sapien wins! Machina chose " + computer.currentChoice + " and Homo Sapien chose " + player.currentChoice);
    }else{
      showResult("Machina wins! Machina chose " + computer.currentChoice + " and Homo Sapien chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[1]){
    if (player.currentChoice === [2]){
    showResult("Homo Sapien wins! Machina chose " + computer.currentChoice + " and Homo Sapien chose " + player.currentChoice);
  }else{
    showResult("Machina wins! Machina chose " + computer.currentChoice + " and Homo Sapien chose " + player.currentChoice);
  }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      showResult("Machina wins! Machina chose " + computer.currentChoice + " and Homo Sapien chose " + player.currentChoice);
    }else {
      showResult("Machina wins! Machina chose " + computer.currentChoice + " and Homo Sapien chose " + player.currentChoice);
      }
  }
  }
  
  function showResult(result){
    const resultText = document.getElementById('results');
    resultText.innerText = result;
    document.body.appendChild(resultText);
    
  }