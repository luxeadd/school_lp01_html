"use strict";

var swiperSchoolLp = new Swiper(".js-school-lp-slider1", {
  slidesPerView: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  loop: true,
  navigation: {
    nextEl: ".c-next-arrow1",
    prevEl: ".c-prev-arrow1"
  },
  breakpoints: {
    // ブレークポイント
    768: {
      // 画面幅768px以上で適用
      slidesPerView: 1.8,
      spaceBetween: 60,
      centeredSlides: true,
      initialSlide: 1
    }
  }
});
jQuery(function ($) {
  // アコーディオン
  $(".js-toggle").on("click", function () {
    $(this).next().slideToggle(500);
    $(this).toggleClass('is-active');
  });
  new ScrollHint(".js-scrollable");
});