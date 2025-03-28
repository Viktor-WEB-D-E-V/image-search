import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGalleryCard(element, images) {
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

  console.log(markup);
  element.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery-item a', {
    captionDelay: 250,
    scrollZoom: false,
  });
  lightbox.refresh();
}

export function clearGallery(element) {
  element.innerHTML = '';
}

export function showLoader(element) {
  element.classList.remove('hidden');
}

export function hideLoader(element) {
  element.classList.add('hidden');
}

export function showLoadMore(element) {
  element.style.display = 'block';
}

export function hideLoadMore(element) {
  element.style.display = 'none';
}
