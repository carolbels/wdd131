// Practice: Some common DOM manipulation concepts/use cases.
// To select an HTML element from the document - using the querySelector method.
// This line of code selects the first instance of an article element from the document and assigns the element as a reference to the variable named article.
const article = document.querySelector('article');

// To change the innerHTML property of an existing element.
// This line of code uses an existing variable that has already selected an element and changes its innerHTML property value.
article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';

// To change the inline CSS style of an element.
// This line of code changes the text-align CSS property of the selected element.
article.style.textAlign = 'right';

// To change an attribute of an element.
// This line of code adds and attribute class to the element and gives it a value.
article.setAttribute('class', 'active');

// An alternative way to change an attribute of an element, specifically the class attribute, is by directly manipulating the element's classList.

articleElement.classList.add('active');
// This method is often preferred when working with class manipulation because classList provides additional methods like add, remove, toggle, and contains, 
// making it more convenient and expressive for managing classes on an element.

// To create an element.
// This line of code creates a new <p> element and stores it in the variable named paragraph.
const paragraph = document.createElement('p');

// To append an element with additional content or elements.
// These lines of code add content to the end of the article element.
article.appendChild(paragraph);
article.append(paragraph, 'Hello World Addition!');
// The append() method allows you to include multiple arguments to append to the element in the specified order.

// To remove an element from the document.
// These lines of code remove the paragraph from the article and then, the article itself.
article.removeChild(paragraph);
article.remove();