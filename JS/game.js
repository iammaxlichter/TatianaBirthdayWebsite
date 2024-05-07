const container = document.getElementById('container');
const scoreElement = document.getElementById('score');
const viewRewardButton = document.getElementById('view-reward');
const failMessage = document.getElementById('fail-message');
const restartButton = document.getElementById('restart-button');
const timerCountdown = document.getElementById('timer-countdown');
let score = 0;
let buttonCount = 1; // Start with the first button
let usedImages = []; // Array to store used image numbers
let isMuted = false;
let timer;



// Add event listener to the document body
document.body.addEventListener('click', function (event) {
    // Check if the clicked element is not the image or its descendants
    if (!event.target.closest('.OscarImages')) {
        score--;
        createMessage2()
        scoreElement.textContent = 'Treats: ' + score;
    }
});



// Timer countdown function
function startTimer() {

    let timeLeft = 24;
    timer = setInterval(function () {
        if (timeLeft <= 0 || score >= 44 || score <= -4) {
            clearInterval(timer);
            if (score >= 7) {
                viewRewardButton.style.display = 'block';
                restartButton.style.display = 'block'; // Show restart button if won
            } else {
                failMessage.style.display = 'block';
                restartButton.style.display = 'block'; // Show restart button if failed
            }
            // Hide all images (dogs)
            const images = document.querySelectorAll('.OscarImages');
            images.forEach(image => {
                image.style.display = 'none';
            });
            // Set timer to display "0 seconds"
            timerCountdown.textContent = '0';
        }
        else {
            timerCountdown.textContent = timeLeft + '';
            timeLeft--;
        }
    }, 1000); // 1 second interval
}

// Function to start the game
function startGame() {
    startTimer(); // Start the timer
    // Show the first image
    document.getElementById('OscarImages').style.display = 'block';
}

// Call startGame function directly to initiate the game
startGame();

function moveImageRandomly(image) {
    const maxX = container.clientWidth - image.width;
    const maxY = container.clientHeight - 180;

    function updatePosition() {
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * (maxY)); // Adjusted to start from 100 pixels below the top edge
        image.style.left = randomX + 'px';
        image.style.top = randomY + 'px';
    }

    // Update position initially and then at regular intervals
    updatePosition();
    setInterval(updatePosition, 5000); // Update position every 2 seconds
}

function createMessage() {
    const randomMessages = ['Oscar is Happy!', 'Yum, a sweet treat', 'Big-backed dog', 'Woof! Woof!', 'SPECTACULAR'];
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    const messageText = randomMessages[randomIndex];
    
    const message = document.createElement('div');
    message.textContent = messageText;
    message.className = 'fun-message';
    
    // Randomly position the message within the container
    const maxX = container.clientWidth - 200; // Adjust 200 according to message width
    const maxY = container.clientHeight - 200; // Adjust 50 according to message height
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * (maxY - 200)) + 200; // Adjusted to start from 100 pixels below the top edge
    
    message.style.position = 'absolute';
    message.style.left = randomX + 'px';
    message.style.top = randomY + 'px';
    
    container.appendChild(message);

    // Set a timeout to remove the message after 2 seconds
    setTimeout(function() {
        message.remove();
    }, 1000);
}

function createMessage2() {
    const randomMessages = ['Sassy dog apocalypse', 'He just ran further away!', 'Get back here Oscar!'];
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    const messageText = randomMessages[randomIndex];
    
    const message = document.createElement('div');
    message.textContent = messageText;
    message.className = 'fun-message';
    
    // Randomly position the message within the container
    const maxX = container.clientWidth - 200; // Adjust 200 according to message width
    const maxY = container.clientHeight - 200; // Adjust 50 according to message height
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * (maxY - 200)) + 200; // Adjusted to start from 100 pixels below the top edge
    
    message.style.position = 'absolute';
    message.style.left = randomX + 'px';
    message.style.top = randomY + 'px';
    
    container.appendChild(message);

    // Set a timeout to remove the message after 2 seconds
    setTimeout(function() {
        message.remove();
    }, 1000);
}



function createNextImage(prevImage, imageNumber) {
    if (buttonCount >= 44) {
        // Stop creating images after 44
        prevImage.remove();
        return;
    }

    buttonCount++; // Increment to track image creation
    let randomImageNumber;
    do {
        randomImageNumber = Math.floor(Math.random() * 44) + 1; // Generate random image number
    } while (usedImages.includes(randomImageNumber)); // Check if image number is already used
    usedImages.push(randomImageNumber); // Add the image number to usedImages array
    const newImage = new Image();
    newImage.className = 'OscarImages';
    newImage.src = 'Pictures/GamePictures/OscarGame' + randomImageNumber + '.png'; // Change image source path
    newImage.alt = 'Oscar Image + ' + randomImageNumber;
    newImage.id = 'OscarImage' + randomImageNumber;

    newImage.addEventListener('click', function () {
        score++;
        scoreElement.textContent = 'Treats: ' + score;
        createNextImage(this, imageNumber + 1); // Pass this image and next image number
        createMessage();
    });

    container.insertBefore(newImage, failMessage); // Insert new image before the fail message
    moveImageRandomly(newImage);
    prevImage.remove(); // Remove the previous image
}

// Generate a random image number for the first image
let firstImageNumber;
do {
    firstImageNumber = Math.floor(Math.random() * 44) + 1;
} while (usedImages.includes(firstImageNumber)); // Ensure the first image is not repeated
usedImages.push(firstImageNumber);
document.getElementById('OscarImages').src = 'Pictures/GamePictures/OscarGame' + firstImageNumber + '.png'; // Change image source path
document.getElementById('OscarImages').alt = 'Oscar image ' + firstImageNumber;

document.getElementById('OscarImages').addEventListener('click', function () {
    score++;
    scoreElement.textContent = 'Treats: ' + score;
    createNextImage(this, 2); // Start the chain by clicking the first image
    createMessage();
});

// Initially place the first image at a random position
moveImageRandomly(document.getElementById('OscarImages'));


// Add event listener to the restart button
restartButton.addEventListener('click', function () {
    location.reload(); // Reload the page to restart
});
// Add event listener to the view reward button
viewRewardButton.addEventListener('click', function () {
    // Redirect to reward.html
    window.location.href = 'reward.html';
});
// Add event listener to the restart button
restartButton.addEventListener('click', function () {
    // Redirect to index.html
    window.location.href = 'index.html';
});


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
