var randomNumber1=Math.random()*5;
randomNumber1=Math.floor(randomNumber1)+1;
var randomImageSource="./images/dice"+randomNumber1+".png"

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomImageSource2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins !!"

}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player2 wins !!"

}
 else {
    document.querySelector("h1").innerHTML="draw"

 }