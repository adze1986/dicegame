let dice = document.getElementById("dice");
const button = document.getElementById("roll");
let score = document.getElementById("score").innerHTML;

button.addEventListener("click", ()=>{
    let rannum = Math.floor(Math.random()*6)+1;
    if (rannum == 1){
        document.getElementById("dice").src = "img/dice1.png"
        alert("You Lose")
        score = 0;
    }
    if (rannum == 2){
        document.getElementById("dice").src = "img/dice2.png";
        score = parseInt(score) + 2;
        document.getElementById("score").innerHTML = score;
    }
    if (rannum == 3){
        document.getElementById("dice").src = "img/dice3.png";
        score = parseInt(score) + 3;
        document.getElementById("score").innerHTML = score;
    }
    if (rannum == 4){
        document.getElementById("dice").src = "img/dice4.png";
        score = parseInt(score) + 4;
        document.getElementById("score").innerHTML = score;
    }
    if (rannum == 5){
        document.getElementById("dice").src = "img/dice5.png";
        score = parseInt(score) + 5;
        document.getElementById("score").innerHTML = score;
    }
    if (rannum == 6){
        document.getElementById("dice").src = "img/dice6.png";
        score = parseInt(score) + 6;
        document.getElementById("score").innerHTML = score;
    }
    if (score >= 21 ){
        alert("You win");
        score = 0
    }
})