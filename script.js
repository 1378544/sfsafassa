// script.js

document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Установим время отображения splash screen (например, 3 секунды)
    const splashDuration = 3000;

    setTimeout(() => {
        // Добавляем класс для скрытия splash screen
        splash.classList.add('splash-hidden');
        
        // Показываем основной контент
        mainContent.classList.add('main-visible');
    }, splashDuration);
});
