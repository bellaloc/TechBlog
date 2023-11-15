const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new comment form
    const post_id = document.querySelector('input[name="post-id"]').value;
    const text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    if (text) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ text, post_id }),
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
  