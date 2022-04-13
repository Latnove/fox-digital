import Swiper, { Pagination } from "swiper";

Swiper.use(Pagination);

export const swiper = () => {
  const swiper = new Swiper(".projects__swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    direction: "vertical",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
