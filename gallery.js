const galleryContainer = document.getElementById('gallery-container');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const imageFolderPath = 'gallery/';
let images = [];
let currentIndex = 0;

async function loadGallery() {
  try {
    const response = await fetch(imageFolderPath);
    if (!response.ok) {
      throw new Error('Failed to fetch gallery folder');
    }

    const parser = new DOMParser();
    const html = parser.parseFromString(await response.text(), 'text/html');
    const links = Array.from(html.querySelectorAll('a'));

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (/\.(jpg|jpeg|png|gif)$/i.test(href)) {
        const img = document.createElement('img');
        img.src = `${imageFolderPath}${href}`;
        img.alt = 'Gallery Image';
        img.addEventListener('click', () => openModal(href));
        galleryContainer.appendChild(img);
        images.push(href);
      }
    });
  } catch (error) {
    console.error('Error loading gallery:', error);
  }
}

function openModal(imagePath) {
  currentIndex = images.indexOf(imagePath);
  modalImage.src = `${imageFolderPath}${imagePath}`;
  modal.style.display = 'block';
}

function closeModalHandler() {
  modal.style.display = 'none';
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
}