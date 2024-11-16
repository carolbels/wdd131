
// In your blank js file, declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector ('#list'); 

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
// make sure the input is not blank 
    if (input.value.trim() !== ''){
// Move the code that you wrote in the last activity into this if block in order to support the correct flow of the program.
        // Create a li element that will hold each entries chapter title and an associated delete button
        const li = document.createElement('li')

        // Create a delete button.
        const deleteButton = document.createElement('button');

        // Populate the li element variable's textContent or innerHTML with the input value.
        li.textContent = input.value;
        // textContent is preferred over innerHTML because it is more secure.
        // However, if you need to include HTML tags, then you would use innerHTML.
        // textContent will not render HTML tags. It will display the tags as text.
        // Why is the value property used?
        // Because the input variable references an HTML input text field and that is what is wanted, i.e., the user's entry. Here is the HTML 
        // that was provided: <input type="text" id="favchap" placeholder="Alma 5">

        // Populate the button textContent with a ❌.
        deleteButton.textContent = '\u274C';
        // Append the li element variable with the delete button.
        li.append(deleteButton);
        // Append the li element variable to the unordered list in your HTML.
        list.append(li);
        // Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        // Change the input value to nothing or the empty string to clean up the interface for the user.
        input.value = '';
    } else {
        alert("Please add a chapter");
        input.focus();
    }
});