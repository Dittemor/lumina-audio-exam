
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













