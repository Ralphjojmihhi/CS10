// Pizza Order by Mr. V

//Add an Event Listen to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// Store order code in a function
function placeOrder() {
 // INPUT
let size = prompt("Enter size of pizza (small, medium, large ");
let topping1 = prompt("Enter first topping: ");
let topping2 = prompt("Enter second topping: ");
let topping3 = prompt("Enter third topping: ");

// PROCESS
let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

// OUTPUT
document.getElementById("output").innerHTML = msg;
} 