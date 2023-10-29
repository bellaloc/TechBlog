// Fetch and display all posts
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('/api/posts');
    if (response.ok) {
      const posts = await response.json();
      const postContainer = document.getElementById('post-container');

      // Render each post
      posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <button class="comment-button" data-post-id="${post.id}">Add Comment</button>
          <div class="comments" data-post-id="${post.id}"></div>
        `;

        // Append the post element to the container
        postContainer.appendChild(postElement);
      });

      // Add event listeners to the comment buttons
      const commentButtons = document.querySelectorAll('.comment-button');
      commentButtons.forEach((button) => {
        button.addEventListener('click', async (event) => {
          const postId = event.target.getAttribute('data-post-id');

          // Add a comment to the post
          await addComment(postId);
        });
      });

      // Load the comments for each post
      posts.forEach((post) => {
        loadComments(post.id);
      });
    } else {
      // Handle error response
      console.error('Error fetching and displaying posts:', response.status, response.statusText);
    }
  } catch (error) {
    // Handle network error
    console.error('Error fetching and displaying posts:', error);
  }
}

// Add a comment to a post
async function addComment(postId) {
  const commentText = prompt('Enter your comment:');
  if (commentText) {
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: commentText }),
      });

      if (response.ok) {
        // Handle successful comment creation
        const newComment = await response.json();
        const commentsContainer = document.querySelector(`.comments[data-post-id="${postId}"]`);
        const commentElement = document.createElement('div');
        commentElement.textContent = newComment.text;
        commentsContainer.appendChild(commentElement);
      } else {
        // Handle error response
        console.error('Error adding a comment:', response.status, response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error('Error adding a comment:', error);
    }
  }
}

// Load the comments for a post
async function loadComments(postId) {
  try {
    const response = await fetch(`/api/posts/${postId}/comments`);
    if (response.ok) {
      // Handle successful comment retrieval
      const comments = await response.json();
      const commentsContainer = document.querySelector(`.comments[data-post-id="${postId}"]`);
      commentsContainer.innerHTML = '';

      comments.forEach((comment) => {
        const commentElement = document.createElement('div');
        commentElement.textContent = comment.text;
        commentsContainer.appendChild(commentElement);
      });
    } else {
      // Handle error response
      console.error('Error fetching and displaying comments:', response.status, response.statusText);
    }
  } catch (error) {
    // Handle network error
    console.error('Error fetching and displaying comments:', error);
  }
}

// Add an event listener to the window load event
window.addEventListener('load', fetchAndDisplayPosts);
