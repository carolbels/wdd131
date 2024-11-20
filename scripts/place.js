const currentYear = new Date().getFullYear();

document.getElementById('current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

const temperature = 27; 
const windSpeed = 11; 

function calculateWindChill(temp, speed) {  
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1); 
}

function displayWindChill(temp, speed) {    
  if (temp <= 10 && speed > 4.8) {
      return `${calculateWindChill(temp, speed)} °C`;
  } else {
      return "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  
  const windChillElement = document.querySelector(".weather li:nth-child(4)");
  windChillElement.textContent = `Wind Chill: ${displayWindChill(temperature, windSpeed)}`;

  const listItems = document.querySelectorAll('.info li, .weather li');
  listItems.forEach(item => {
  const parts = item.textContent.split(':');
  if (parts.length > 1) {
    item.innerHTML = `<span style="font-weight: bold;">${parts[0]}:</span> ${parts[1]}`;
  }

  });
});


