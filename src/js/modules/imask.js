import IMask from "imask";

export const phoneValidation = (elementID) => {
  const phoneMask = IMask(document.getElementById(elementID), {
    mask: "+{7}(000)000-00-00",
  });
};
