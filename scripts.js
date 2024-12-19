document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удалить активный класс у всех кнопок
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Добавить активный класс к нажатой кнопке
            button.classList.add('active');

            // Получить целевую страницу
            const target = button.getAttribute('data-target');

            // Скрыть все страницы
            pages.forEach(page => page.classList.remove('active'));

            // Показать целевую страницу
            document.getElementById(target).classList.add('active');
        });
    });

    // Плавная анимация появления карточек при загрузке
    const templateCards = document.querySelectorAll('.template-card');
    templateCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
