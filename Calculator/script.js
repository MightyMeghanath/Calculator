console.log("Welcome to my New Project : CALCULATOR");
let container = document.getElementsByClassName("container");
let displaybar = document.getElementsByClassName("display-bar");
let elements = document.getElementsByClassName("elements");
let digits = document.getElementsByClassName("digits");
//LOGIC
//Digits
//intializing the digits
let one = document.getElementById("d1")
let two = document.getElementById("d2")
let three = document.getElementById("d3")
let four = document.getElementById("d4")
let five = document.getElementById("d5")
let six = document.getElementById("d6")
let seven = document.getElementById("d7")
let eight = document.getElementById("d8")
let nine = document.getElementById("d9")
let zero = document.getElementById("d0")
let plusss = document.getElementById("d+")
let minusss = document.getElementById("d-")
let bysss = document.getElementById("d/")
let intosss = document.getElementById("dX")
let equalsss = document.getElementById("d=")
let delsss = document.getElementById("dDEL")
let decimalsss = document.getElementById("d.")
//adding events to the digits
plusss.addEventListener("click",()=>{
    display.innerText += "+";
})
minusss.addEventListener("click",()=>{
    display.innerText += "-";
})
bysss.addEventListener("click",()=>{
    display.innerText += "/";
})
equalsss.addEventListener("click",()=>{
   let maths = eval(display.innerText);
   display.innerText = maths;
})
one.addEventListener("click",()=>{
    display.innerText += 1;
})
two.addEventListener("click",()=>{
    display.innerText += 2;
})
three.addEventListener("click",()=>{
    display.innerText += 3;
})
four.addEventListener("click",()=>{
    display.innerText += 4;
})
five.addEventListener("click",()=>{
    display.innerText += 5;
})
six.addEventListener("click",()=>{
    display.innerText += 6;
})
seven.addEventListener("click",()=>{
    display.innerText += 7;
})
eight.addEventListener("click",()=>{
    display.innerText += 8;
})
nine.addEventListener("click",()=>{
    display.innerText += 9;
})
zero.addEventListener("click",()=>{
    display.innerText += 0;
})
decimalsss.addEventListener("click",()=>{
    display.innerText += ".";
})
intosss.addEventListener("click",()=>{
    display.innerText += "*";
})
delsss.addEventListener("click",()=>{
    display.innerText = ""
})