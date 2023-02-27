const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// #f56440
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const element = hex[getRandomNumber()];
        hexColor += element;
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
};