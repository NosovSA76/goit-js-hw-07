import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector('.gallery');
const imagesMarkup = galleryItems.map(({ original, preview, description }) =>
  `<li class="gallery__item">
    <a href="${original}" target="_blank">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
  </li>`
).join('');

gallery.insertAdjacentHTML('beforeend', imagesMarkup);


       
var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

