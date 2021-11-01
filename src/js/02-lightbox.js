import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')


const createGalleryElements = function (object) {
    return galleryItems.map(({ preview, original, description }) =>
        `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
   `).join('')
    
}
galleryEl.insertAdjacentHTML('afterbegin', createGalleryElements(galleryItems))

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
