
(function () {
    const THEME_KEY = "fertwise_theme";

    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || "light";
    }

    function applyTheme(theme) {
        const selectedTheme = theme === "dark" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", selectedTheme);
        localStorage.setItem(THEME_KEY, selectedTheme);

        const button = document.getElementById("themeToggle");

        if (button) {
            button.textContent =
                selectedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        }

        window.dispatchEvent(
            new CustomEvent("fertwise-theme-change", {
                detail: { theme: selectedTheme }
            })
        );
    }

    applyTheme(getSavedTheme());

    document.addEventListener("DOMContentLoaded", function () {
        const button = document.getElementById("themeToggle");

        if (button) {
            button.addEventListener("click", function () {
                const currentTheme =
                    document.documentElement.getAttribute("data-theme");

                applyTheme(currentTheme === "dark" ? "light" : "dark");
            });

            applyTheme(getSavedTheme());
        }
    });

    window.fertiWiseApplyTheme = applyTheme;
})();
