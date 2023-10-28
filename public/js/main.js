async function fetchAndDisplayPosts() {
    try {
      const response = await fetch('/api/posts');
      if (response.ok) {
        const posts = await response.json();
        const postContainer = document.getElementById('post-container');
  
        posts.forEach((post) => {
          const postElement = document.createElement('div');
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button class="comment-button" data-post-id="${post.id}">Add Comment</button>
            <div class="comments" data-post-id="${post.id}"></div>
          `;
          postContainer.appendChild(postElement);
        });
  
        const commentButtons = document.querySelectorAll('.comment-button');
        commentButtons.forEach((button) => {
          button.addEventListener('click', (event) => {
            const postId = event.target.getAttribute('data-post-id');
            addComment(postId);
          });
        });
      }
    } catch (error) {
      console.error('Error fetching and displaying posts:', error);
    }
  }
  
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
        }
      } catch (error) {
        console.error('Error adding a comment:', error);
      }
    }
  }
  
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
      }
    } catch (error) {
      console.error('Error fetching and displaying comments:', error);
    }
  }
  
  window.addEventListener('load', fetchAndDisplayPosts);
  
  