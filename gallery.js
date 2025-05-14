const galleryContainer = document.getElementById('gallery-container');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const imageFolderPath = 'gallery/';
const images = [
  'Photo_25_05-05_19_22_13_74.png',
  'Photo_25_05-06_21_16_20_83.png',
  'Photo_25_05-07_16_21_53_58.png',
  'image4.png'
  
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
  modalImage.src = `${imageFolderPath}${images[currentIndex]}`;
  modal.style.display = 'block';
}

function closeModalHandler() {
  modal.style.display = 'none';
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = `${imageFolderPath}${images[currentIndex]}`;
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = `${imageFolderPath}${images[currentIndex]}`;
}


closeModal?.addEventListener('click', closeModalHandler);
nextButton?.addEventListener('click', showNextImage);
prevButton?.addEventListener('click', showPreviousImage);


loadGallery();