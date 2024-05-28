function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'casple' && password === 'sussyBak1') {
        window.location.href = 'https://twitter.com';
    } else {
        alert('Username o password errati');
    }
}
