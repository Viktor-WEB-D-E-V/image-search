import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPixabayImages } from './js/pixabay-api';
import render from './js/render-function';

const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const queryParams = {
  query: '',
  page: 0,
  totalPage: 0,
};

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

  render.clearGallery(refs.gallery);
  render.showLoader(refs.loader);
  render.hideLoadMore(refs.loadMoreBtn);

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
      render.renderGalleryCard(refs.gallery, images);

      if (queryParams.page < queryParams.totalPage) {
        render.showLoadMore(refs.loadMoreBtn);
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    render.hiddeLoader(refs.loader);
  }
  // getPixabayImages(searchQuery)
  //   .then(data => {})
  //   .catch(() => {})
  //   .finally(() => {});
}
async function onLoadMore() {
  queryParams.page += 1;

  render.showLoader(refs.loader);
  render.showLoadMore(refs.loadMoreBtn);

  try {
    const { images } = await getPixabayImages(
      queryParams.query,
      queryParams.page
    );

    render.renderGalleryCard(refs.gallery, images);

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
    render.hiddeLoader(refs.loader);
  }
}
