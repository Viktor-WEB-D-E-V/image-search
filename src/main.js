import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import API from './js/pixabay-api';
import render from './js/render-function';

const refs = {
  submitBtn: document.querySelector('.form-btn'),
};

refs.submitBtn.addEventListener('click', e => {
  e.preventDefault();

  const testQuery = '';

  console.log(Boolean(testQuery));
  if (!testQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a value',
      position: 'topRight',
    });
    return;
  }

  API.getPixabayImages(testQuery)
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

console.log(refs.submitBtn);

