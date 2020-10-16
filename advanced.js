// Declare a counter variable

let userColorArray;

let count = 0;

// Grab user input
function handleColor(){
    let userColors = document.querySelector('#colobox');

    // Creat an array from the returned input string
    userColorArray = userColors.value.split(',');

    // Create a function that loops through our color arrays
    function loopColors(){
        document.body.style.background = userColorArray[count];

        if(++count < userColorArray.length){setTimeout(loopColors, 2000);}
    }

    // Call the loopColors function 
    loopColors();
}

function prev(){
    if(count == 0) {
        count = userColorArray.length - 1;
    }
    else{
        count--;
    }

    document.body.style.background = userColorArray[count];
}

function next() {
    
    if (count == userColorArray.length - 1) {
      count = 0
    }
    else {
      count++;
    }
  
    document.body.style.background = userColorArray[count];
  }