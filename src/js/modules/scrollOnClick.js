export const scrollOnClick = () => {
  const headerEl = document.getElementById("header");
  const linkEls = document.querySelectorAll(`*[data-scroll]`);

  const checkScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY === 0) {
      headerEl.classList.remove("active-scroll");
    } else {
      headerEl.classList.add("active-scroll");
    }
  };

  document.addEventListener("DOMContentLoaded", checkScroll);
  window.addEventListener("scroll", checkScroll);

  linkEls.forEach((el) => {
    el.addEventListener("click", (event) => {
      console.log("ㄟ(≧◇≦)ㄏ");
      event.preventDefault();
      const scrollRef = el.getAttribute("data-scroll");
      const scrollElement = document.querySelector(scrollRef);

      const scrollValue =
        scrollElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerEl.offsetHeight;

      window.scrollTo({
        top: scrollValue,
        behavior: "smooth",
      });
    });
  });
};
