import axios from 'axios';
const API_KEY = '22970342-054b8243005dd74f99097cd8f';
const BASIC_URL = 'https://pixabay.com/api/';

function getPixabayImages(value) {
  return axios
    .get(
      `${BASIC_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}

export default {
  getPixabayImages,
};
