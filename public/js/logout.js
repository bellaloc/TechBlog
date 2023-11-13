const logout = async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(`Logout failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during logout. Please try again.');
  }
};

document.querySelector('#logout-link').addEventListener('click', logout);
