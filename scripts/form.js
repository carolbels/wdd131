const currentYear = new Date().getFullYear();

document.getElementById('current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const productSelect = document.getElementById('productName');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

if (window.location.pathname.endsWith('review.html')) {
    const counter = localStorage.getItem('reviewCounter') || 0;
    const newCounter = parseInt(counter) + 1;
    localStorage.setItem('reviewCounter', newCounter);
    document.body.innerHTML += `<p>You have submitted ${newCounter} reviews.</p>`;
}