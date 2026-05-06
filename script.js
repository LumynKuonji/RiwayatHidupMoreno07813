document.addEventListener('DOMContentLoaded', () => {
    const btnMode = document.getElementById('btn-mode');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        btnMode.textContent = '☀️ Ganti Tema Terang';
    }

    btnMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            btnMode.textContent = '☀️ Ganti Tema Terang';
            localStorage.setItem('theme', 'dark');
        } else {
            btnMode.textContent = '🌙 Ganti Tema Gelap';
            localStorage.setItem('theme', 'light');
        }
    });
});