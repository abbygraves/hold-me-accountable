async function updatesFormHandler(event) {
  event.preventDefault();

  const updates = document.querySelector('input[name="update-field"]').value.trim();
  

  console.log(updates)
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


async function commentFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector('input[name="comment-field"]').value.trim();

  const response = await fetch(`/api/comment`, {
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


document.querySelector('.updates-form').addEventListener('submit', updatesFormHandler);
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);