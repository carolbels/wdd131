const currentYear = new Date().getFullYear();

document.getElementById('current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.getElementById("hamburger-button");
    const navigationMenu = document.getElementById("navigation-menu");

    // Clicking the hamburger button toggles the navigation menu items from viewable to not viewable
    hamburgerButton.addEventListener("click", function() {
        navigationMenu.classList.toggle("active");

        // Use a symbol, such as an 'X' to close the hamburger menu.
        if (navigationMenu.classList.contains("active")) {
            hamburgerButton.textContent = '\u274C';
        } else {
            hamburgerButton.textContent = "☰"; 
        }
    });
});
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:  
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
    },
    {
        templeName: "Manaus Brazil",
        location: "Manaus, Brazil",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl:  
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085290-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:  
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
];
createTempleCard(temples);

const updateHeading = (text) => {
    document.querySelector("h2").textContent = text;
}

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", (event) => {
    event.preventDefault();
    updateHeading("Old Temples");
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1999;
    });
    createTempleCard(filteredTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", (event) => {
    event.preventDefault();
    updateHeading("New Temples");
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(filteredTemples);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", (event) => {
    event.preventDefault();
    updateHeading("Large Temples");
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(filteredTemples);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", (event) => {
    event.preventDefault();
    updateHeading("Small Temples");
    const filteredTemples = temples.filter(temple => temple.area < 89000);
    createTempleCard(filteredTemples);
});

function createTempleCard(templeFilter) {
    document.querySelector(".photos").innerHTML = "";
    templeFilter.forEach(temple =>{
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label"> Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label"> Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label"> Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".photos").appendChild(card);
    });
}

