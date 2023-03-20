// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);
// const basicLightbox = require('basiclightbox')

// const gallery = document.querySelector('.gallery');
// // gallery.style.display = "flex";
// // gallery.style.justifyContent = "space-around";
// // const maxWidth = parseInt(window.getComputedStyle(gallery).getPropertyValue('max-width'));
// // const gridGap = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-gap'));
// // const gridAutoRows = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
// // const width = (maxWidth - gridGap * 2) / 3
// // console.log(maxWidth);
// // console.log(gridGap);
// // console.log(width);


// const imagesMarkup = galleryItems.reduce(
//   (markup, { original, preview, description }) =>
//         markup + `<li class="gallery__item">
//     <a href="${original}" target="_blank">
//     <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`,
//   ''
// );

// gallery.insertAdjacentHTML('beforeend', imagesMarkup);

// const listItem = document.querySelectorAll('li');
// listItem.forEach((item) => {
//   item.setAttribute('class', "gallery__item");
// })

// const imgItem = document.querySelectorAll('img');
// imgItem.forEach((item) => {
//     // item.setAttribute('class', ".gallery__image");
//     item.style.width = `${width}px`;
//     item.style.height = `${gridAutoRows}px`;
// })

// const imageItem = document.querySelectorAll('img');
// console.log(imageItem);

import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';

const gallery = document.querySelector('.gallery');
const imagesMarkup = galleryItems.reduce(
  (markup, { original, preview, description }) =>
    markup + `<li class="gallery__item">
      <a href="${original}" target="_blank">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
    </li>`,
  ''
);
gallery.insertAdjacentHTML('beforeend', imagesMarkup);


gallery.addEventListener('click', event => {
  event.preventDefault();
  const clickedElement = event.target;
  if (clickedElement.nodeName !== 'IMG') {
    return;
  }
  const previewUrl = clickedElement.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${previewUrl}" width="800" height="600">
  `);
    instance.show();
    
    document.addEventListener("keydown", instanceClose);   
        
    function instanceClose({ code }) {
    if (code === "Escape") {
    instance.close();
  }
}

});



  
  