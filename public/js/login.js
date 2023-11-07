// Select the login form and elements
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

// Handle form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    // Send a POST request to your server's login endpoint
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Redirect to the dashboard or another page on successful login
      window.location.replace('/dashboard');
    } else {
      // Display an error message
      errorMessage.textContent = 'Invalid username or password';
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.textContent = 'An error occurred. Please try again.';
  }
});
