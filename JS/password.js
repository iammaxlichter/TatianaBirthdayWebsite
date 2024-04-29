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
document.addEventListener('DOMContentLoaded', function () {
    // Check if the cute music is already playing
    if (!localStorage.getItem('cuteMusicPaused')) {
        // Cute music is not paused, play it
        var cuteMusic = document.getElementById('cute-music');
        cuteMusic.play();
    }
});

// Toggle mute state of the cute music
function toggleMute() {
    var cuteMusic = document.getElementById('cute-music');
    var muteIcon = document.getElementById('mute-icon');

    if (cuteMusic.muted) {
        // Unmute the music
        cuteMusic.muted = false;
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up');
    } else {
        // Mute the music
        cuteMusic.muted = true;
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute');
    }
}

// Pause the cute music when navigating away from the page
window.addEventListener('beforeunload', function () {
    var cuteMusic = document.getElementById('cute-music');
    if (!cuteMusic.paused) {
        localStorage.setItem('cuteMusicPaused', 'false');
    } else {
        localStorage.setItem('cuteMusicPaused', 'true');
    }
});

