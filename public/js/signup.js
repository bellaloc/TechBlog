const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup').value.trim();
  //const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();
console.log(username, password)
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
  
document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);
