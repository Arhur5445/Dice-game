// player 1.

// Generate a random number between 1 and 6 to player 1 dice.
 var randomNumberPlayer1Dice = Math.floor(Math.random() * 6) + 1;

 // Generate a random side between 1 and 6 to player´s 1 dice (using concatenation).
 var randomsideplayer1dice = "dice" + randomNumberPlayer1Dice + ".png";

 // Changing "scr" atribute value ("img2"), to randomize dice sides.
var randomImageAttributePlayer1 = "./dice-game/assets/img/" + randomsideplayer1dice;

//selecting the image to player 1.
var ImagePlayer1 = document.querySelector(".img1");

//Setting teh atribute value("img") to player's 1.
ImagePlayer1.setAttribute("src", randomImageAttributePlayer1);



// player 2.

// Generate a random number between 1 and 6 to player 2 dice.
 var randomNumberPlayer2Dice = Math.floor(Math.random() * 6) + 1;

 // Generate a random side between 1 and 6 to player´s 1 dice (using concatenation).
 var randomsideplayer2dice = "dice" + randomNumberPlayer2Dice + ".png";

 // Changing "scr" atribute value ("img1"), to randomize dice sides.
var randomImageAttributePlayer2 = "./dice-game/assets/img/" + randomsideplayer2dice;

//selecting the image to player 1.
var  imagePlayer2 = document.querySelector(".img2");

//Setting teh atribute value("img") to player's 1.
imagePlayer2.setAttribute("src", randomImageAttributePlayer2);


//game condition 

if (randomNumberPlayer1Dice > randomNumberPlayer2Dice){ 
    document.querySelector("h1").innerHTML = "Player 1 Wins 😜"
}

else if (randomNumberPlayer1Dice < randomNumberPlayer2Dice){
    document.querySelector("h1").innerHTML = "Player 2 Wins 😜"

}

else{
    document.querySelector("h1").innerHTML = "Draw try again ( ͡° ͜ʖ ͡°)"
}


