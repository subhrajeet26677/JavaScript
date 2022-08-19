console.log("this is me!!!...");
// alert("me");
// document.write("this is dowcument write.")
console.warn("this is warning");
console.error("this is an error");

// Containers to stores data values



var number = 34;
var number2 = 56;
console.log(number + number2);


var num1 = 455;
var str1 = "This is a string";
var str2 = 'This is also a string';

//objects
var marks = {
    ravi: 34,
    subham: 78,
    harry: 99,
}

console.log(marks);


function avg(a, b) {
    return (a + b) / 2;
}

c = avg(4, 6);

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         break;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function (element) {
//     console.log(element);
// })

let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

console.log(myArr = ["fan", "Camera", 34, null, true]);
// myArr.pop();
// myArr.push("potter");
// myArr.shift();
let newLen = myArr.unshift("harry");
console.log(newLen);
console.log(myArr);


let Mydate = new Date();
// console.log(Mydate.getTime());
console.log(Mydate.getFullYear());
console.log(Mydate.getDay());
console.log(Mydate.getMinutes());
console.log(Mydate.getSeconds());

//dom manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemC = document.getElementsByClassName("container");
// console.log(elemC);
// elemC[0].style.background = "yellow";
elemC[0].classList.add("bg-primary");
elemC[0].classList.add("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

tn = document.getElementsByTagName('button');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created array";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removChild(element); --> remove an element

// Selecting using query
sel = document.querySelector('.container')
console.log(sel);
sel1 = document.querySelectorAll('.container')
console.log(sel1);


// Events in javaScript

function clicked() {
    console.log("the button was clicked");
}

window.onload = function () {
    console.log("the window was loaded");
}

firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked </b>"
    console.log("Clicked done.")
})

// firstContainer.addEventListener('mouseover', function () {
//     console.log("Mouse overed.")
// })

// firstContainer.addEventListener('mouseout', function () {
//     console.log("Mouse is out")
// })


//set timeout and setinterval
// normal
// function summ(a, b) {
//     return a + b;
// }
// Arraow functions
// summ = (a, b) => {
//     return a + b;
// }

// logKaro = () => {
//     console.log("I am your log")
// }

//set timeout
// setTimeout(logKaro, 1000);
// setInterval(logKaro, 1000);

// use clearinteval(clr)/clearTimeout(clr) to cancel setInterval/setTimeOut


// Java Script localStorage
// obj = { name: "potter", length: 1, a: { this: "that" } }
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"harry", "length":1,"a":{"this":"that"}}`)
// console.log(parsed);



































