import { getPixabayImages } from './js/pixabay-api';
import {
  renderGalleryCard,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  showNotification,
} from './js/render-function';

import refs from './js/utils/refs';
import queryParams from './js/utils/queryParams';
import scrollBy from './js/utils/scrollBy';

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  queryParams.query = form.elements.search_text.value.trim();

  if (!queryParams.query) {
    showNotification('Please enter a value', 'warning');
    return;
  }

  queryParams.page = 1;

  clearGallery(refs.gallery);
  showLoader(refs.loader);
  hideLoadMore(refs.loadMoreBtn);

  try {
    setTimeout(async () => {
      try {
        const { images, totalHits } = await getPixabayImages(
          queryParams.query,
          queryParams.page
        );
        queryParams.totalPage = Math.ceil(totalHits / 15);

        if (images.length === 0) {
          showNotification(
            'Sorry, there are no images matching your search query. Please try again!',
            'info'
          );
        } else {
          renderGalleryCard(refs.gallery, images);

          if (queryParams.page < queryParams.totalPage) {
            showLoadMore(refs.loadMoreBtn);
          }
        }
      } catch (error) {
        showNotification(
          'Failed to fetch images. Please try again later.',
          'error'
        );
      } finally {
        hideLoader(refs.loader);
      }
    }, 1000);
  } catch (error) {
    showNotification(
      'Failed to fetch images. Please try again later.',
      'error'
    );
  }
  form.reset();
}
async function onLoadMore() {
  queryParams.page += 1;

  showLoader(refs.loader);
  showLoadMore(refs.loadMoreBtn);

  try {
    setTimeout(async () => {
      try {
        const { images } = await getPixabayImages(
          queryParams.query,
          queryParams.page
        );

        renderGalleryCard(refs.gallery, images);
        scrollBy();
        if (queryParams.page >= queryParams.totalPage) {
          showNotification('No more images to load.', 'warning');
          hideLoadMore(refs.loadMoreBtn);
        }
      } catch (error) {
        showNotification(
          'Failed to fetch images. Please try again later.',
          'error'
        );
      } finally {
        hideLoader(refs.loader);
      }
    }, 500);
  } catch (error) {
    showNotification(
      'Failed to fetch images. Please try again later.',
      'error'
    );
  } finally {
    hideLoader(refs.loader);
  }
}
