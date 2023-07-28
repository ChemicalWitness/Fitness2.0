const Swiper = window.Swiper;
const reviewsSlider = document.querySelector('.reviews__slider');

export const reviewSlider = () => {
  reviewsSlider &&
  new Swiper('.swiper2', {
    navigation: {
      nextEl: '.reviews__control--next',
      prevEl: '.reviews__control--prev',
    },
    slidesPerView: 1,
  })
}
