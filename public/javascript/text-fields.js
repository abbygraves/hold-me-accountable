async function updatesFormHandler(event) {
  event.preventDefault();

  const updates = document.querySelector('input[name="update-field"]').value.trim();
  
  // console.log(updates)
  const response = await fetch(`/api/updates`, {
    method: 'POST',
    body: JSON.stringify({
      updates
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

function deleteUpdates(id) {
  fetch(`/api/updates/` + id, {
    method: 'DELETE',
  });
  window.location.reload();
}


async function commentFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector('input[name="comment-field"]').value.trim();

  const response = await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      comment
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}


function deleteComment(id) {
  fetch(`/api/comments/` + id, {
    method: 'DELETE',
  });
  window.location.reload();
}



async function habitFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="habit-field"]').value.trim();

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}


document.querySelector('.updates-form').addEventListener('submit', updatesFormHandler);
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
document.querySelector('.habit-form').addEventListener('submit', habitFormHandler);