var buttonColors = ["red", "green", "yellow", "blue"];
var gamePattern = []; // Stores the sequence generated by the game
var userClickedPattern = []; // Stores the player's input sequence
var level = 0; // Current level (score)
var bestScore = localStorage.getItem("bestScore") || 0; // Fetch the highest score from localStorage
var started = false; // Track if the game has started

// Update BEST score in the HTML when the page loads
$(".center-circle p").text("BEST " + bestScore);

// Start the game on keypress
$(document).on("keydown", function () {
    if (!started) {
        $("h1").text("Simon Game"); // Reset the heading text
        nextSequence();
        started = true;
    }
});


// Handle player clicks
$(".quadrant").on("click", function () {
    var userChosenColor = $(this).attr("class").split(" ")[1]; // Extract color name (e.g., "red")
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor); // Play sound
    buttonAnimation(userChosenColor); // Flash the button

    checkAnswer(userClickedPattern.length - 1); // Check the player's input
});

// Generate the next random sequence
function nextSequence() {
    userClickedPattern = []; // Reset player's input
    level++; // Increase the level (score)

    // Update score display
    $(".score").text(level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Flash the button
    buttonAnimation(randomChosenColor);
    playSound(randomChosenColor);
}

// Check the player's answer
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000); // Continue to next level
        }
    } else {
        gameOver();
    }
}

// Handle Game Over
function gameOver() {
    playSound("wrong"); // Play wrong sound
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over! Press Any Key to Restart");

    // Update BEST score if the current level is higher
    if (level > bestScore) {
        bestScore = level;
        localStorage.setItem("bestScore", bestScore); // Save to localStorage
        $(".center-circle p").text("BEST " + bestScore);
    }

    startOver(); // Restart the game
}

// Restart the game
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    $(".score").text(level); // Reset score display
}

// Function to play sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Function for button animation
function buttonAnimation(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}
