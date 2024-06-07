
   function validateForm() {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    

    const nameError = document.getElementById('nameError')
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    


    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    let isValid = true;
  
    
    if (password === '') {
      nameError.textContent = 'name field is required';
      isValid = false;
    }




    // Validate email
    if (email === '') {
      emailError.textContent = 'Email field is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailError.textContent = 'Enter a valid email ';
        isValid = false;
      }
    }
  
    // Validate password
    // if (password === '') {
    //   passwordError.textContent = 'Password field is required';
    //   isValid = false;
    // }
  
    return isValid; // Return true if all inputs are valid
  }
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });
  
