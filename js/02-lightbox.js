import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryImages = galleryItems.map(image => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
                class="gallery__image"
                src="${image.preview}"
                alt="${image.description}"
            />
        </a>
    </li>`
)
    .join('');

gallery.insertAdjacentHTML('beforeend', galleryImages);

const settingsSimpleLightbox = event => {
    event.preventDefault();
    new SimpleLightbox('.gallery__link',
        {
            captionsData: 'alt',
            captionDelay: 250
        }
    );
};

gallery.addEventListener('click', settingsSimpleLightbox);