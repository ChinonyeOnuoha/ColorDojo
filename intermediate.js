function handleColor () {
    // Grab user input
    let userColors = document.querySelector('#colorbox');
    
    // Create an array from the returned input string...
    let userColorArray = userColors.value.split(',');
    
    // Declare a counter variable
    let count = 0;
    
    // Create a function to loop through our colors array
    function loopColors () {
      document.body.style.background = userColorArray[count];
      
      if (++count < userColorArray.length) {
        setTimeout(loopColors, 3000);
      }
    }
    
    // Call the loopColors function 
    loopColors();
    
  }
  
  function handleLoopedColors() {
      // Grab user input
      let userColors = document.querySelector('#colorbox');
    
      // Create an array from the returned input string...
      let userColorArray = userColors.value.split(',');
    
      // Declare a counter variable
      let count = 0;
    
      // Create a function to loop through our colors array
      
    
      setInterval(function() {
       document.body.style.background = userColorArray[count++ % userColorArray.length];
      }, 2000);
      
  }
  
  function selectFunctionOption () {
    let loopForever = document.querySelector('#forever');
    console.log(loopForever.checked);
     (loopForever.checked == true) ? handleLoopedColors() : handleColor();
    
  }