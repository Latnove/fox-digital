export const switchTheme = () => {
  const blueTheme = Math.random() > 0.5 ? true : false;

  document.querySelector("html").dataset.activeTheme = blueTheme
    ? "blue"
    : "orange";
};
