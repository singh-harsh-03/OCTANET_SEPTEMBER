const destinationCards = document.querySelectorAll('.destination__card');
const prevArrow = document.querySelector('.destination__nav .ri-arrow-left-s-line');
const nextArrow = document.querySelector('.destination__nav .ri-arrow-right-s-line');

let currentSetIndex = 0;
const cardsPerSet = 4;

// Function to show a set of images
function showImageSet(setIndex) {
    const startIndex = setIndex * cardsPerSet;
    const endIndex = startIndex + cardsPerSet;
    
    // Hide all images
    destinationCards.forEach((card) => {
        card.style.display = 'none';
    });

    // Show the images in the current set
    for (let i = startIndex; i < endIndex && i < destinationCards.length; i++) {
        destinationCards[i].style.display = 'block';
    }
}

// Show the initial set of images
showImageSet(currentSetIndex);

nextArrow.addEventListener('click', () => {
    currentSetIndex++;
    if (currentSetIndex * cardsPerSet >= destinationCards.length) {
        currentSetIndex = 0; 
    }
    showImageSet(currentSetIndex);
});

// Event listener for the previous arrow
prevArrow.addEventListener('click', () => {
    currentSetIndex--;
    if (currentSetIndex < 0) {
        currentSetIndex = Math.floor((destinationCards.length - 1) / cardsPerSet); // Loop to the last set
    }
    showImageSet(currentSetIndex);
});


