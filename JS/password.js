var passwordModal = new bootstrap.Modal(document.getElementById('passwordModal'));
var rewardModal = new bootstrap.Modal(document.getElementById('rewardModal'));

function showPasswordPrompt() {
    // Show the password prompt modal
    passwordModal.show();
}

function checkPassword() {
    // Get the entered password
    var enteredPassword = document.getElementById('passwordInput').value;

    // Check if the entered password is correct
    if (enteredPassword === 'dolphinluvrttg3') {
        // Password is correct, close the password prompt modal and show the reward modal
        passwordModal.hide();
        rewardModal.show();
    } else {
        // Incorrect password, show an error message
        var errorMessage = document.createElement('div');
        errorMessage.textContent = 'Incorrect password';
        errorMessage.classList.add('text-danger');

        var modalBody = document.querySelector('.modal-body');
        modalBody.appendChild(errorMessage);

        // Remove the error message after 2 seconds
        setTimeout(function() {
            errorMessage.remove();
        }, 2000);
    }
}

