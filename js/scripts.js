const number = document.getElementById("number");

const zeroKey = document.getElementById("0");
const oneKey = document.getElementById("1");
const twoKey = document.getElementById("2");
const threeKey = document.getElementById("3");
const fourKey = document.getElementById("4");
const fiveKey = document.getElementById("5");
const sixKey = document.getElementById("6");
const sevenKey = document.getElementById("7");
const eightKey = document.getElementById("8");
const nineKey = document.getElementById("9");

// If a button is clicked, clickedButton becomes that element.
document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "BUTTON"){
        clickedButton = element;
        console.log(clickedButton);
    }
});
