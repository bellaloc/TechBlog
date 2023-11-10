// Select the login form and elements
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

// Handle form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    // Send a POST request to your server's login endpoint
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Redirect to the dashboard or another page on successful login
      window.location.replace('/dashboard');
    } else {
      // Display an error message
      errorMessage.textContent = 'Invalid username or password';
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.textContent = 'An error occurred. Please try again.';
  }
});

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
      handleErrorResponse(response, 'Error fetching and displaying posts');
    }
  } catch (error) {
    handleNetworkError(error, 'Error fetching and displaying posts');
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
        const newComment = await response.json();
        const commentsContainer = document.querySelector(`.comments[data-post-id="${postId}"]`);
        const commentElement = document.createElement('div');
        commentElement.textContent = newComment.text;
        commentsContainer.appendChild(commentElement);
      } else {
        handleErrorResponse(response, 'Error adding a comment');
      }
    } catch (error) {
      handleNetworkError(error, 'Error adding a comment');
    }
  }
}

// Load the comments for a post
async function loadComments(postId) {
  try {
    const response = await fetch(`/api/posts/${postId}/comments`);
    if (response.ok) {
      const comments = await response.json();
      const commentsContainer = document.querySelector(`.comments[data-post-id="${postId}"]`);
      commentsContainer.innerHTML = '';

      comments.forEach((comment) => {
        const commentElement = document.createElement('div');
        commentElement.textContent = comment.text;
        commentsContainer.appendChild(commentElement);
      });
    } else {
      handleErrorResponse(response, 'Error fetching and displaying comments');
    }
  } catch (error) {
    handleNetworkError(error, 'Error fetching and displaying comments');
  }
}

// Add an event listener to the window load event
window.addEventListener('load', fetchAndDisplayPosts);
