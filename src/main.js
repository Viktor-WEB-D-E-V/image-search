import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import API from './js/pixabay-api';
import render from './js/render-function';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.search_text.value.trim();

    if (!searchQuery) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a value',
        position: 'topRight',
      });
      return;
    }

    API.getPixabayImages(searchQuery)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.info({
            title: 'No Results',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          render.renderGalleryCard(data.hits);
        }
      })
      .catch(() => {
        iziToast.error({
          title: 'Error',
          message: 'Failed to fetch images. Please try again later.',
          position: 'topRight',
        });
      });
});

