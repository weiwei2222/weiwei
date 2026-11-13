const nav = document.querySelector(".nav");
const navHeight = nav ? nav.offsetHeight : 0;

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").slice(1);

    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    const top = Math.max(targetElement.offsetTop - navHeight - 8, 0);
    window.scrollTo({ top: top, behavior: "smooth" });
  });
});

// Pin the navigation bar to the top of the screen once it scrolls out of
// its original position. A placeholder keeps the page from jumping.
if (nav) {
  const placeholder = document.createElement("div");
  placeholder.style.display = "none";
  nav.parentNode.insertBefore(placeholder, nav);

  let navTop = nav.offsetTop;
  let measuredHeight = nav.offsetHeight;

  function measure() {
    if (!nav.classList.contains("is-stuck")) {
      navTop = nav.offsetTop;
      measuredHeight = nav.offsetHeight;
    }
  }

  function onScroll() {
    if (window.scrollY >= navTop) {
      if (!nav.classList.contains("is-stuck")) {
        placeholder.style.display = "block";
        placeholder.style.height = measuredHeight + "px";
        nav.classList.add("is-stuck");
      }
    } else if (nav.classList.contains("is-stuck")) {
      nav.classList.remove("is-stuck");
      placeholder.style.display = "none";
    }
  }

  measure();
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    measure();
    onScroll();
  });
}
