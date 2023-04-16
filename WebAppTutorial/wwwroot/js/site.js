// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function NewColor() {
    document.getElementById('hello_world').style.color = 'blue';
}

function oldColor() {
    document.getElementById('hello_world').style.color = 'green';
}

//JS Code for making text gradient
const textElement = document.getElementById("myText");
const gradientColors = ["#e66465", "#9198e5"]; // Define the gradient colors
let currentColorIndex = 0; // Index of the current color in the gradientColors array

// Function to update the text color with gradient
function updateTextColorWithGradient() {
    textElement.style.color = `linear-gradient(to right, ${gradientColors[currentColorIndex]}, ${gradientColors[(currentColorIndex + 1) % gradientColors.length]})`;
    currentColorIndex = (currentColorIndex + 1) % gradientColors.length;
}

// Call the function initially
updateTextColorWithGradient();
