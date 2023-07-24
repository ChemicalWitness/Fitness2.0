const Swiper = window.Swiper;

export const slider = () => {
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.slider__control--next',
      prevEl: '.slider__control--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,

      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 30,

      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,

      },
    },
    loop: true,
  })
}
