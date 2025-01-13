const toggleButton = document.getElementById('light-toggle');
const darkIcon = document.getElementById('light-toggle-dark');
const lightIcon = document.getElementById('light-toggle-light');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    updateIcons(savedTheme);
}

// Update icon visibility
function updateIcons(theme) {
    darkIcon.style.display = theme === 'dark' ? 'inline' : 'none';
    lightIcon.style.display = theme === 'light' ? 'inline' : 'none';
}

// Toggle theme on click
toggleButton.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
});
