// Simple Addiction Calculator

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);


function btnClicked() {
    console.log("1");
// Input
let num1 = +document.getElementById("num1-in").value;
let num2 = +document.getElementById("num2-in").value;

// Process
let total = num1 + num2;

// Output 
document.getElementById("output").innerHTML = total;
}
