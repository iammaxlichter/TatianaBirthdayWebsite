const cuteMusic = document.getElementById('cute-music'); // Function to play the cute music
function playCuteMusic() {
    if (!isMuted) {
        if (cuteMusic.paused) {
            cuteMusic.play();
        }
    }
}

// Play the cute music when the user clicks anywhere on the page
document.body.addEventListener('click', playCuteMusic);
