// document.getElementById("count-el").innerHTML = 5;

// let count = 5;

// console.log(count);

// function increment() {
//     console.log("the button was clicked");
// }
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;


function increment() {
    count = count + 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    countEl.textContent = 0;
    count = 0;
}







































