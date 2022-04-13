import { switchTheme } from "./modules/switchTheme.js";
import { swiper } from "./modules/swiper.js";
import { phoneValidation } from "./modules/imask.js";
import { scrollOnClick } from "./modules/scrollOnClick.js";

switchTheme();
swiper();
phoneValidation("projects-phone");
phoneValidation("footer-phone");
scrollOnClick();

// Temporary function
document.querySelectorAll("form").forEach((el) =>
  el.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelectorAll("input").forEach((el) => {
      el.value = "";
    });
    return false;
  })
);
