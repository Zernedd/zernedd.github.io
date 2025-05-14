//this is written by chatgpt bc i couldnt get it to work myself
const galleryContainer = document.getElementById('gallery-container');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
//DONT EVER DO ANYTHING LIKE THIS 
// this is the only way i was able to get it to work

const imageFolderPath = 'gallery/';
const images = [
  'Photo_25_05-05_19_22_13_74.png',
  'Photo_25_05-06_21_16_20_83.png',
  'Photo_25_05-07_16_21_53_58.png',
  'Photo_25_05-07_17_03_45_34.png',
    'Photo_25_05-07_18_19_49_60.png',
    'Photo_25_05-07_19_39_38_02.png',
    'Photo_25_05-12_21_30_44_30.png',
    'Photo_25_05-13_09_42_27_26.png',
    'Screenshot 2025-05-06 114208.png',
    'Screenshot 2025-03-07 190434.png',
    'Photo_25_05-05_20_58_12_66.png',
    'Photo_25_05-06_13_45_30_45.png',
    'Photo_25_05-06_13_45_40_39.png',
    'Photo_25_05-06_14_51_50_69.png',
    'Photo_25_05-06_15_26_48_48.png',
    'Photo_25_05-06_19_43_53_76.png',
    'Photo_25_05-06_21_12_18_10.png',
];
let currentIndex = 0;

function loadGallery() {
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = `${imageFolderPath}${image}`;
    img.alt = `Gallery Image ${index + 1}`;
    img.addEventListener('click', () => openModal(index)); 
    galleryContainer.appendChild(img);
  });
}

function openModal(index) {
  currentIndex = index;
  updateModalImage();
  modal.style.display = 'block'; 
}

function closeModalHandler() {
  modal.style.display = 'none'; 
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateModalImage();
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModalImage();
}

function updateModalImage() {
  modalImage.src = `${imageFolderPath}${images[currentIndex]}`;
  modalImage.alt = `Gallery Image ${currentIndex + 1}`;
}

// Event listeners
closeModal.addEventListener('click', closeModalHandler);
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPreviousImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalHandler();
  }
});

// Load the gallery on page load
loadGallery();