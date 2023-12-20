const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").slice(1);

    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
  });
});
// https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo
// https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior
// https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetTop
