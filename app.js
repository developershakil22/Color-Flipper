const colors = ["red", "green", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const randomNumber = colors[getRandomNumber()];
    console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber ;
    color.textContent = randomNumber;
});

function getRandomNumber(){
    return Math.floor( Math.random()*colors.length);
};