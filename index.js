// Dice Selection
var diceRolls=[6, 6];
for (var i=1;i<=2;i++) {
  var randomNumber = Math.round(Math.random()*6+1,0)
  diceRolls[i-1]=randomNumber
  document.querySelector(".img"+String(i)).src = "images/dice"+String(randomNumber)+".png"
}
// Update h1 result tag
if (diceRolls[0] === diceRolls[1]) {
  document.querySelector("h1").innerHTML = "Cats Game!"
}
else if (diceRolls[0] > diceRolls[1]) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
