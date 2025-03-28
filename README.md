# Image Search App

This is a web app that lets you to search for images using the Pixabay API. It has a smooth, user-friendly interface, and features like infinite scrolling and neat animations.

## Features

- Search for images with the Pixabay API
- Clean and simple design 
- Infinite scrolling with a "Load More" button
- Smooth transitions when new images are loaded
- Error and warning notifications to keep you informed

## Tech Used

- HTML, CSS, JavaScript
- Axios for making API requests
- Pixabay API to fetch the images
- iziToast for notifications
- SimpleLightbox to preview images in a cool lightbox

## Getting Started

To get up and running with this app:

1. Clone the repo:
   ```sh
   git clone https://github.com/Viktor-WEB-D-E-V/image-search.git
   ```

2. Go into the project folder:
   ```sh
   cd image-search
   ```

3. Install all the dependencies:
   ```sh
   npm install
   ```

4. Run the development server:
   ```sh
   npm start
   ```

## Deployment

Every time you push to the `main` branch, the app will automatically be built and deployed to GitHub Pages using GitHub Actions.

### How It Works

- The build process installs the necessary dependencies and generates the `dist` folder.
- The `gh-pages` branch gets updated with the latest version of the app, and it’s live on GitHub Pages!

## API Details

This app pulls images from the [Pixabay API](https://pixabay.com/api/docs/).

### API Endpoint:
```sh
GET https://pixabay.com/api/
```

### Request Parameters:
| Parameter  | Type   | Description |
|------------|--------|------------------------------------------------|
| `key`      | string | Your personal API key from Pixabay             |
| `q`        | string | The search query (e.g., "nature", "cats")      |
| `image_type` | string | What type of images to fetch (default: `photo`) |
| `orientation` | string | Image orientation (default: `horizontal`)     |
| `safesearch` | boolean | Filter explicit content (set to `true` to enable) |
| `per_page` | number | How many images to get per request (default: 15) |
| `page`     | number | The page number of results to get              |

### Example Request:
```sh
https://pixabay.com/api/?key=YOUR_API_KEY&q=flowers&image_type=photo&per_page=15&page=1
```

## Contributing

Want to help out? Feel free to fork the repo and create a feature branch. Open a pull request and we’ll review it. Contributions are always welcome!

## Author 
Viktor Kalyn 
