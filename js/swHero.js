const mainVisualBg = document.querySelector(
  ".hero .main-visual .main-visual-bg",
);
// console.log(mainVisualBg);

const swHero = new Swiper(".sw-hero", {
  speed: 1000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },

  on: {
    slideChangeTransitionStart: function (swiper) {
      // const activeSilde = swiper.activeIndex + 1;
      // console.log(activeSilde);
      // mainVisualBg.style.backgroundImage = `url(assets/images/slide_${activeSilde}.png)`;
      const activeSilde = swiper.slide[swiper.activeindex];
      // console.log(activeSilde);
      const activeSildeimg = activeslide.querySelector(".slide-image img");
      // console.log(activeSildeimg.src);
      mainVisualBg.computedStyleMap.backgroundimage = `url(${activeSildeimg.src})`;
    },
  },
});
