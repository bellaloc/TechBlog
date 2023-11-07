// Select the logout button
const logoutButton = document.querySelector('#logout-button');

// Handle logout button click
logoutButton.addEventListener('click', async () => {
  try {
    // Send a POST request to your server's logout endpoint
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Redirect to the homepage or another page on successful logout
      window.location.replace('/');
    } else {
      console.error('Logout failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
