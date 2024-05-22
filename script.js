<script>
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Add your form submission logic here
    alert(`Username: ${username}, Password: ${password}`);
});
</script>
