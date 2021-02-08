let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

let body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  let arrow = document.querySelector(".arrow");

  let thisLink = arrow.previousElementSibling;
  let subMenu = arrow.nextElementSibling;
  let thisArrow = arrow;
  thisLink.classList.add("parent");
  arrow.addEventListener("click", function () {
    subMenu.classList.toggle("open");
    thisArrow.classList.toggle("active");
  });
} else {
  body.classList.add("mouse");
}
