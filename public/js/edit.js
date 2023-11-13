const editFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the edit post form
    const postId = document.querySelector('input[name="post-id"]').value.trim();
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const body = document.querySelector('textarea[name="post-body"]').value.trim();
  
    if (title && body) {
      // Send a PUT request to the API endpoint
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the updated post's details page
        document.location.replace(`/posts/${postId}`);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const deletePostHandler = async () => {
    // Collect post ID from the edit post form
    const postId = document.querySelector('input[name="post-id"]').value.trim();
  
    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      // If successful, redirect the browser to the list of posts
      document.location.replace('/posts');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
  document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);
  