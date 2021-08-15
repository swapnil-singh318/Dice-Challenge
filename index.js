function dice()
{
  var randomNumber1=Math.random()*6;
  randomNumber1=Math.floor(randomNumber1)+1;
  return randomNumber1;
}

var number1=dice();
var number2=dice();

var image1="dice"+number1+".png";
var image2="dice"+number2+".png";

var randomImgSrc1="images/"+image1;
var randomImgSrc2="images/"+image2;

document.querySelector(".img1").setAttribute("src",randomImgSrc1);

document.querySelector(".img2").setAttribute("src",randomImgSrc2);

if (number1>number2)
{
  document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}

else if (number2>number1)
{
  document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}

else
{
  document.querySelector("h1").textContent="Draw!";
}
