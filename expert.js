function handleGradient() {
    let colorBox = document.querySelector('#colorbox');
    
    let gradientType = 'linear-gradient';
    if (document.querySelector('.linear').checked == true) {
      gradientType = 'linear-gradient';
    } else if (document.querySelector('.radial').checked == true) {
      gradientType = 'radial-gradient';
    }
    
    document.body.style.background = `${gradientType}(${colorBox.value})`;
    
    document.querySelector('#submit').style.background = `${gradientType}(${colorBox.value})`;
    
    colorBox.style.border = `1px dashed line ${gradientType}(${colorBox.value})`;
  }