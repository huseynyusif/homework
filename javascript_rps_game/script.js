let userScore = 0;
let computerScore = 0;

function playGame(choice) {
  let tools = ['k','q','d'];
  let computer = tools[Math.round(Math.random() * 2)].toString();
  let user = tools[choice].toString();
  if (computer == 'd' && user == 'k'){
    renderDom('user')
    userScore++;
  }else if (computer == 'd' && user == 'q'){
    renderDom('computer')
    computerScore++;
  }else if (computer == 'k' && user == 'q'){
    renderDom('user')
    userScore++;
  }else if (computer == 'k' && user == 'd'){
    renderDom('computer')
    computerScore++;
  }else if (computer == 'q' && user == 'k'){
    renderDom('computer')
    computerScore++;
  }else if (computer == 'q' && user == 'd'){
    renderDom('user')
    userScore++;
  }else {
    renderDom('draw')
  }
}

function renderDom(winner){
  if (document.querySelector("#element")) {
    document.querySelector("#element").remove();
  }
  let element = document.createElement('div')
  element.setAttribute("id", "element");
  if (winner != "draw") {
    element.innerText = winner+' won';
  }else{
    element.innerText = 'Beraberlik';
  }
  let scores = document.createElement('p')
  scores.innerText = `${userScore} - ${computerScore}`;
  element.append(scores)
  document.body.append(element)
}
