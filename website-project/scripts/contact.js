document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("form-feedback").style.display = "block"; 
    this.reset(); 
});