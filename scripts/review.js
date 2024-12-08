let reviewCounter = localStorage.getItem("reviewCounter") || 0;

    
reviewCounter = parseInt(reviewCounter, 10) + 1;


localStorage.setItem("reviewCounter", reviewCounter);

const message = `You have submitted ${reviewCounter} review(s).`;
document.getElementById("counter-message").textContent = message;