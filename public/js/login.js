console.log("I'm Linked")
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-input-login').value.trim(); // Corrected ID
  const password = document.querySelector('#password-input-login').value.trim(); // Corrected ID

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }), // Corrected key name to 'username'
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};


document
   .querySelector('#login-form')
   .addEventListener('submit', loginFormHandler);
