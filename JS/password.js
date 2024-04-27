function showPasswordPrompt() {
    // Show the password prompt modal
    var modal = new bootstrap.Modal(document.getElementById('passwordModal'));
    modal.show();
}

function checkPassword() {
    // Get the entered password
    var enteredPassword = document.getElementById('passwordInput').value;

    // Check if the entered password is correct
    if (enteredPassword === 'dolphinluvrttg3') {
        // Password is correct, show the reward modal
        var rewardModal = new bootstrap.Modal(document.getElementById('rewardModal'));
        rewardModal.show();
    } else {
        // Incorrect password, show an error message
        alert('Incorrect password. Please try again.');
    }
}