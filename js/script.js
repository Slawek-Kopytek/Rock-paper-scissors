function playGame(playerInput){
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function(random){
    if(random == 1){
      return 'kamień';
    } else if (random == 2){
      return 'papier';
    } else if (random == 3){
      return 'nożyce'
    }
  }

  const argComputerMove = getMoveName(randomNumber);

  getMoveName(playerInput);

  const argPlayerMove = getMoveName(playerInput);

  const displayResult = function (){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis!');
    } else {
      printMessage('Wpisz odpowiednią wartość!')
    }
  }
  displayResult()
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1)
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2)
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3)
});