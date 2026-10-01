const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("theme");


// ========================================
// APPLY THEME
// ========================================

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark-mode");

        themeIcon.textContent = "☀";

    } else {

        document.body.classList.remove("dark-mode");

        themeIcon.textContent = "☾";
    }
}


// ========================================
// INITIAL THEME
// ========================================

if (savedTheme) {

    applyTheme(savedTheme);

} else {

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(prefersDark ? "dark" : "light");
}


// ========================================
// TOGGLE THEME
// ========================================

themeToggle.addEventListener("click", () => {

    const isDark =
        document.body.classList.contains("dark-mode");

    const newTheme = isDark
        ? "light"
        : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);

});