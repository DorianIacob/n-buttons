let winningButton = 0;

function generateButtons() {
  let myDiv = document.getElementById("buttonsContainer");
  if (myDiv.parentNode) {
    myDiv.parentNode.removeChild(myDiv);
  }
  document.getElementById("message1").textContent = "";
  document.getElementById("message2").textContent = "";
  let n = document.getElementById('buttonsQty').value;
  if (n != 0) {
    document.getElementById("instruction1").style = "color: black;";
    document.getElementById("instruction2").style = "color: black;";
    winningButton = Math.floor(Math.random() * n) + 1;
    let myDiv = document.createElement('div');
    myDiv.id = "buttonsContainer";
    document.getElementById('buttons').appendChild(myDiv);
    for(let i = 1; i <= n; ++i) {
      let guessButton = document.createElement('button');
      guessButton.textContent = "Button " + i;
      guessButton.id = i;
      guessButton.onclick = function() {
        pressedButton(this.id);
      };
      myDiv.appendChild(guessButton);
    }
  }
  
}

function pressedButton(buttonId) {
  if (buttonId == winningButton) {
    document.getElementById("message1").textContent = "You guessed! :)";
    document.getElementById("message1").style.color = "green";
    document.getElementById("message2").textContent = "The winning button is " + winningButton;
  } else {
    document.getElementById("message1").textContent = "You didn't guessed! :(";
    document.getElementById("message1").style.color = "red";
    document.getElementById("message2").textContent = "The winning button is " + winningButton;
  }
}