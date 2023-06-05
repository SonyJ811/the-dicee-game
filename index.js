var p1,p2;

while(!p1 || !p2 || p1===p2){
    alert("Please enter player's names");
    p1=prompt("Please enter Player-1 name");
    p2=prompt("Please enter Player-2 name");
}
document.querySelector(".player-1 h2").innerHTML=p1;
document.querySelector(".player-2 h2").innerHTML=p2;
function dice(){

    var sound=new Audio("assets/roll.mp3");
    sound.play();
var randomNumber1=Math.floor((Math.random())*6)+1;
document.querySelector(".player-1 img").setAttribute("src","./assets/dice"+randomNumber1+".png");

var randomNumber2=Math.floor((Math.random())*6)+1;
document.querySelector(".player-2 img").setAttribute("src","./assets/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h2").textContent=p1+" is the winner 🥳";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h2").textContent="its a tie!";
}
else{
    document.querySelector("h2").textContent=p2+" is winner 🥳";
}
}
