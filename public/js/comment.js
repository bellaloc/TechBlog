const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new comment form
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    if (body) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If successful, reload the page to display the new comment
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#new-comment-form').addEventListener('submit', newCommentFormHandler);
  