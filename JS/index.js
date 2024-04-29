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
