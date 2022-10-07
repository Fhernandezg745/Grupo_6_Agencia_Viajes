// Cache out buttons container, and all of the panels
const toggleButton = document.querySelector('#toggleButton');
const divList = document.querySelectorAll('.listHolder');

// Add an event listener to the buttons container
toggleButton.addEventListener('click', () => {
    if (divList.style.display == 'none') {
        divList.style.display = "block"
    } else {
        divList.style.display = "none"
    }
});