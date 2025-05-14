const galleryContainer = document.getElementById('gallery-container');


const imageFolderPath = 'gallery/';

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
        galleryContainer.appendChild(img);
      }
    });
  } catch (error) {
    console.error('Error loading gallery:', error);
  }
}

loadGallery();
