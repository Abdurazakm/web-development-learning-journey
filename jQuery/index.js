// Add CSS class to an element
$("h1").addClass("title-big margin-50");

// Remove a specific CSS class
$("h1").removeClass("margin-50");

// Check if an element has a specific class
$('h1').hasClass("margin-50"); // Returns true or false

// Manipulate text content of an element
$("h1").text("hey Abdurazak");

// Manipulate HTML content of an element
$("button").html("<em>don't click me</em>");

// Manipulate attributes (e.g., change the href of a link)
$("a").attr("href", "https://developer.mozilla.org");

// Add an event listener using jQuery (not the best practice)
$("h1").click(function() {
    $("h1").css("color", "purple");
});

// Adding event listener using plain JavaScript
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}

// Adding event listener using jQuery (bad practice example for repeated events)
$("button").click(function() {
    $("h1").css("color", "purple");
});

// Detecting keydown events on the body and updating h1 text
$("body").keydown(function(event) {
    $("h1").text(event.key);
});

// Best practice: Using the 'on' method to attach event listeners
// Adding click event listener to buttons
$("button").on("click", function() {
    $("h1").css("color", "purple");
});

// Adding keydown event listener to the body
$("body").on("keydown", function(event) {
    $("h1").text(event.key);
});

// Changing the h1 color on mouseover
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

// Adding new HTML elements relative to an existing element
$("h1").before("<button>before</button>"); // Adds a button before the h1 element
$("h1").after("<button>after</button>");   // Adds a button after the h1 element
$("h1").prepend("<button>prepend</button>"); // Adds a button inside h1, at the beginning
$("h1").append("<button>append</button>");   // Adds a button inside h1, at the end

// Removing an HTML element
// $("h1").remove(); // Completely removes the h1 element from the DOM

// Adding animations with jQuery
// Example: Sliding up, sliding down, and animating the opacity
$("button").on("click", function() {
    $("h1").slideUp()        // Slides the h1 element up (hides it)
            .slideDown()      // Slides the h1 element down (shows it again)
            .animate({        // Animates the h1 element's opacity to 0.5
                opacity: 0.5
            });
});
