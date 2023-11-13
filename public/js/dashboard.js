document.addEventListener('DOMContentLoaded', (event) => {
    const logoutBtn = document.querySelector('#logout-link');
  
    const logoutHandler = async () => {
      try {
        const response = await fetch('/api/users/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/'); // Redirect to the home page after logout
        } else {
          console.error('Logout failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
    };
  
    if (logoutBtn) {
      logoutBtn.addEventListener('click', logoutHandler);
    }
  });
  