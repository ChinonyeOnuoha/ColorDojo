// Get the user color input
function handleColor(){
    let userColor = document.querySelector('#colorbox');


// Set the user inputted color as background color
document.body.style.background = userColor.value;

// Sets the button color also
document.querySelector('#submit').style.background = userColor.value;

// Set the border color of the inputted box
userColor.style.borderColor = userColor.value;

}