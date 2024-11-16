// DOM event concepts/use cases
// Click Event: Triggered when a user clicks on an element. It's widely used for handling button clicks, link clicks, 
// or any interaction involving a mouse click.
buttonElement.addEventListener('click', function() {
  // Code to execute when the element is clicked
});

// The addEventListener method takes two arguments: the event name and a function to execute when the event is triggered. 
// The function is called an event handler. We will learn more about writing functions later in the course. 
// For now, just know that the function is a block of code that will be executed when the event is triggered. 
// The function is also called a callback function because it is called back when the event is triggered

// Keyup Event: Triggered when a key is released. Useful for handling keyboard input.
buttonElement.addEventListener('keyup', function() {
  // Code to execute when a key is released
});

// DOMContentLoaded Event: Triggered when the HTML document has been completely parsed and all deferred scripts have been executed.
// It's widely used for initializing JavaScript applications.
document.addEventListener("DOMContentLoaded", function() {
  // Code to execute when the DOM is parsed
});
