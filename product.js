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

// Color-pickers

const dots = document.querySelectorAll(".color-dot");
const speakerImage = document.getElementById("product-image");
const colorName = document.getElementById('colorName'); 

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

     const name = dot.dataset.name;
    colorName.textContent = name;
  });
}); 