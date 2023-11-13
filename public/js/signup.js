const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the signup form
    const username = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the login page
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  