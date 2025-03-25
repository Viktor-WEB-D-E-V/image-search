import API from './js/pixabay-api';
//import render from './js/render-function';

API.getPixabayImages('flowers').then(imgsObj => console.log(imgsObj));
