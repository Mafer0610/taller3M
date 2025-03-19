document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
  
    const result = await response.json();
    document.getElementById('message').textContent = result.message;
  
    if (result.success) {
        window.location.href = 'home.html';
    }
  });
  