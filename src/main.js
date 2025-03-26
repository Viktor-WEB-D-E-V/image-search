import API from './js/pixabay-api';
import render from './js/render-function';


API.getPixabayImages('cat').then(data => {
  console.log(data.hits);
  render.renderGalleryCard(data.hits);
});
