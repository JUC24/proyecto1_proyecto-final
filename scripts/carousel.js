const carousel = [...document.querySelectorAll('.carousel__container')];
const next = [...document.querySelectorAll('.carousel__arrow--next')];
const previous = [...document.querySelectorAll('.carousel__arrow--previous')];


carousel.forEach((item, i) => {
  let container = item.getBoundingClientRect();
  let containerWidth = container.width;


  next[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })


  previous[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})
