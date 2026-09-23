import { translations } from "./translations.js";

const resetPaneScroll = () => {
    document
        .querySelectorAll(".projects-pane, .about-pane")
        .forEach((pane) => {
            pane.scrollTop = 0;
        });
};

const changeLanguage = (language) => {
    document.documentElement.lang = language === "si" ? "sl" : language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const translatedText = translations[language][key];

        if (translatedText) {
            element.textContent = translatedText;
        }
    });

    document.querySelectorAll(".language-button").forEach((button) => {
        const isActive = button.dataset.language === language;

        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive);
    });

    resetPaneScroll();
};

document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.language);
    });
});