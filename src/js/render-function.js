import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function renderGalleryCard(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
            <ul class="gallery-info">
              <li class="gallery-info-item">Likes <span class="descr-span">${likes}</span></li>
              <li class="gallery-info-item">Views <span class="descr-span">${views}</span></li>
              <li class="gallery-info-item">Comments <span class="descr-span">${comments}</span></li>
              <li class="gallery-info-item">Downloads <span class="descr-span">${downloads}</span></li>
            </ul> 
          </a>
        </li>   
      `;
      }
    )
    .join('');

  gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery-item a', {
    captionDelay: 250,
    scrollZoom: false,
  });
  lightbox.refresh();
}

export default { renderGalleryCard };
