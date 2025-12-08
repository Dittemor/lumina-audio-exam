
console.log("Lumina Audio loaded");

// Search input

const searchContainer = document.querySelector('.search-container');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchContainer.querySelector('.search-input').focus();
    }
});

document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
        searchContainer.classList.remove('active');
    }
}); 

//Login dropdown
  const personBtn = document.querySelector(".person-btn");
  const loginDropdown = document.getElementById("loginDropdown");

  personBtn.addEventListener("click", () => {
    loginDropdown.style.display =
      loginDropdown.style.display === "block" ? "none" : "block";
  });

 
  document.addEventListener("click", (e) => {
    if (!personBtn.contains(e.target) && !loginDropdown.contains(e.target)) {
      loginDropdown.style.display = "none";
    }
  });


// Cart dropdown
  const cartBtn = document.querySelector(".cart-btn");
  const cartDropdown = document.getElementById("cartDropdown");
  const exploreBtn = document.getElementById("exploreBtn");

  cartBtn.addEventListener("click", () => {
    cartDropdown.style.display =
      cartDropdown.style.display === "block" ? "none" : "block";
  });


  document.addEventListener("click", (e) => {
    if (!cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {
      cartDropdown.style.display = "none";
    }
  });


  exploreBtn.addEventListener("click", () => {
    const productSection = document.getElementById("product-info"); 
    productSection.scrollIntoView({ behavior: "smooth" });
  });



// Color-pickers

const dots = document.querySelectorAll(".color-dot");
const speakerImage = document.getElementById("speakerImage");

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const imgPath = dot.dataset.img;

    speakerImage.style.opacity = 0;
    setTimeout(() => {
      speakerImage.src = imgPath;
      speakerImage.style.opacity = 1;
    }, 200);

    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
  });
}); 

// Review slider

const track = document.querySelector('.reviews-track');
const slides = document.querySelectorAll('.reviews-box');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    updateSlider();
});

// Newsletter button
  const btn = document.getElementById("nl-button");
  const emailField = document.getElementById("nl-email");

  btn.addEventListener("click", function (e) {
    e.preventDefault(); 
    emailField.style.display = "block";
  });













