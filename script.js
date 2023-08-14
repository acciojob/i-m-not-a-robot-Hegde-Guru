//your JS code here. If required.
const images = ['img1', 'img2', 'img3', 'img4', 'img5'];
const imageContainer = document.querySelector('.image-container');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');
let selectedImages = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderImages() {
    shuffleArray(images);
    const repeatedImage = images[Math.floor(Math.random() * images.length)];
    const imageElements = images.map(imageClass => {
        const img = document.createElement('img');
        img.className = imageClass;
        img.src = ''; // Set the image source using an API or other means
        img.addEventListener('click', () => handleImageClick(img));
        return img;
    });

    imageContainer.innerHTML = '';
    imageElements.forEach(img => imageContainer.appendChild(img));

    selectedImages = [];
    resetButton.style.display = 'none';
    verifyButton.style.display = 'none';
    para.textContent = '';
}

function handleImageClick(img) {
    if (selectedImages.length < 2 && selectedImages.indexOf(img) === -1) {
        selectedImages.push(img);
        if (selectedImages.length === 2) {
            verifyButton.style.display = 'block';
        }
    }

    if (selectedImages.length === 1) {
        resetButton.style.display = 'block';
    }
}

resetButton.addEventListener('click', () => {
    selectedImages = [];
    resetButton.style.display = 'none';
    verifyButton.style.display = 'none';
    para.textContent = '';
});

verifyButton.addEventListener('click', () => {
    if (selectedImages.length === 2) {
        if (selectedImages[0].className === selectedImages[1].className) {
            para.textContent = 'You are a human. Congratulations!';
        } else {
            para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
        }
        verifyButton.style.display = 'none';
    }
});

// Initial setup
renderImages();
