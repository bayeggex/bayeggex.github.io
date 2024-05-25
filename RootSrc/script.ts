const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement | null;
const themeIcon = document.getElementById('theme-icon') as HTMLElement | null;

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
}
