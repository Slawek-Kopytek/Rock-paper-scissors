let randomNumber = Math.floor(Math.random() * 3 + 1);

function getMoveName(randomNumber){
  if(randomNumber == 1){
    return 'kamień';
  } else if (randomNumber == 2){
    return 'papier';
  } else if (randomNumber == 3){
    return 'nożyce'
  } else {
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
  }
}

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

function getMoveName(playerInput){
  if(playerInput == 1){
    return 'kamień';
  } else if (playerInput == 2){
    return 'papier';
  } else if (playerInput == 3){
    return 'nożyce'
  } else {
    printMessage('Nie znam ruchu o id ' + playerInput + '.');
    return 'nieznany ruch';
  }
}

let argPlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + argPlayerMove);

let result = displayResult(argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){

  if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  } else {
    printMessage('Wpisz odpowiednią wartość!')
  }
}