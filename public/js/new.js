const newFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new post form
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const body = document.querySelector('textarea[name="post-body"]').value.trim();
  
    if (title && body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the new post's details page
        document.location.replace('/posts');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
  