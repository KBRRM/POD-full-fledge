<script>
document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const referralId = document.getElementById('referral-id').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;
    
    // Add your form submission logic here
    alert(`Referral ID: ${referralId}, First Name: ${firstName}, Last Name: ${lastName}, Mobile: ${mobile}, Password: ${password}, Repeat Password: ${repeatPassword}`);
});
</script>
