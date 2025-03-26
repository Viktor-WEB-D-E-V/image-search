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
        return `<li class="gallery-item">
        <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}">
        </a>
        
        <div class="info">
          <p class="info-item">Likes: ${likes}</p>
          <p class="info-item">Comments: ${comments}</p>
          <p class="info-item">Views: ${views}</p>
          <p class="info-item">Downloads: ${downloads}</p>
        </div>
      </li>`;
      }
    )
    .join('');
  
  gallery.innerHTML = markup;
}

export default {
  renderGalleryCard};
