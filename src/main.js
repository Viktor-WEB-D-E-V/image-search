import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPixabayImages } from './js/pixabay-api';
import {
  renderGalleryCard,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
} from './js/render-function';

import refs from './js/utils/refs';
import queryParams from './js/utils/queryParams';

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  queryParams.query = form.elements.search_text.value.trim();

  if (!queryParams.query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a value',
      position: 'topRight',
    });
    return;
  }

  queryParams.page = 1;

  clearGallery(refs.gallery);
  showLoader(refs.loader);
  hideLoadMore(refs.loadMoreBtn);

  try {
    const { images, totalHits } = await getPixabayImages(
      queryParams.query,
      queryParams.page
    );
    queryParams.totalPage = Math.ceil(totalHits / 15);

    if (images.length === 0) {
      iziToast.info({
        title: 'No Results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
     renderGalleryCard(refs.gallery, images);

      if (queryParams.page < queryParams.totalPage) {
        showLoadMore(refs.loadMoreBtn);
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader(refs.loader);
  }
}
async function onLoadMore() {
  queryParams.page += 1;

  showLoader(refs.loader);
  showLoadMore(refs.loadMoreBtn);

  try {
    const { images } = await getPixabayImages(
      queryParams.query,
      queryParams.page
    );

    renderGalleryCard(refs.gallery, images);

    if (queryParams.page >= queryParams.totalPage) {
      iziToast.warning({
        title: 'Warning',
        message: 'No more images to load.',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader(refs.loader);
  }
}
