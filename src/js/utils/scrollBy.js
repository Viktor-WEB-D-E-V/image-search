function scrollBy() {
  window.scrollBy({
    top:
      2 *
      document.querySelector('.gallery-item').getBoundingClientRect().height,
    behavior: 'smooth',
  });
}
export default scrollBy;
