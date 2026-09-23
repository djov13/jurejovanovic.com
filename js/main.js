
import "./language-selector.js";

const resetPaneScroll = () => {
    document
        .querySelectorAll(".projects-pane, .about-pane")
        .forEach((pane) => {
            pane.scrollTop = 0;
        });
};

document.querySelector(".studio-name").addEventListener("click", (event) => {
  event.preventDefault();
    resetPaneScroll();
  const aboutPane = document.querySelector(".about-pane");
  const headerHeight = document.querySelector(".site-header").offsetHeight;
  const aboutTop = aboutPane.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top: aboutTop, behavior: "smooth" });
});
