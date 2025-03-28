import axios from 'axios';
const API_KEY = '22970342-054b8243005dd74f99097cd8f';
const BASIC_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getPixabayImages(query, page = 1) {
  try {
    const response = await axios.get(BASIC_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page: page,
      },
    });

    return {
      images: response.data.hits,
      totalHits: response.data.totalHits,
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images. Please try again later.');
  }
}
