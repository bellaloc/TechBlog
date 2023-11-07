// Select elements in your HTML
const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');

// Fetch and display user profile data
async function fetchAndDisplayUserProfile() {
  try {
    const response = await fetch('/api/user/profile'); 
    if (response.ok) {
      const userProfile = await response.json();

      // Update the HTML elements with user profile data
      usernameElement.textContent = userProfile.username;
      emailElement.textContent = userProfile.email;
    } else {
      handleErrorResponse(response, 'Error fetching user profile');
    }
  } catch (error) {
    handleNetworkError(error, 'Error fetching user profile');
  }
}

// Helper function to handle error responses
function handleErrorResponse(response, message) {
  console.error(`${message}: ${response.status} ${response.statusText}`);
}

// Helper function to handle network errors
function handleNetworkError(error, message) {
  console.error(`${message}: ${error}`);
}


// Add an event listener to the window load event to fetch and display the user profile
window.addEventListener('load', fetchAndDisplayUserProfile);
