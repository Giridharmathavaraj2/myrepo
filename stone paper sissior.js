let playGame = confirm("shall we start stone paper sissior game");
if(playGame){
    var playerChoice = prompt("Please enter your choice stone, paper, sissior")
    console.log(playerChoice)
    if(playerChoice){
        var playerOne = playerChoice.trim().toLowerCase();
        if(playerOne ==="stone" || playerOne ==="paper" || playerOne ==="sissior"){
            var computerchoice = Math.floor(Math.random()*3 +1);
            var computer = computerchoice === 1?"stone":
            computerchoice ===2 ?"paper":"sissior";
            var result = playerOne === computer ?"Tie":playerChoice==="stone" && computer==="paper"?
            `playerone : ${playerOne}\n computerchoice :${computer}\n computer win`:playerChoice==="paper" && computer==="sissior"?
            `playerone : ${playerOne}\n computerchoice :${computer}\n computer win`:playerChoice==="sissior" && computer==="stone"?
            `playerone : ${playerOne}\n computerchoice :${computer}\n computer win`: `playerone : ${playerOne}\n computerchoice :${computer}\n player win`;
            alert(result);
            var playagain = confirm("Play Again");
            playagain ?location.reload():alert("Thanks for playing!");
        }else{
            alert("You didn't enter stone, paper, sissior");
        }
     }else{
        alert("I think you have change your mind , we can see next time ");
     }

}
else{
    alert("thanks for use your website")
}