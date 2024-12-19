document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const viewCodeButtons = document.querySelectorAll('.view-code-btn');

    // Переключение страниц при нажатии на кнопки навигации
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

    // Показать/скрыть блок с кодом при нажатии на кнопку
    viewCodeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeId = button.getAttribute('data-code-id');
            const codeBlock = document.getElementById(codeId);
            if (codeBlock.style.display === 'block') {
                codeBlock.style.display = 'none';
                button.textContent = 'Просмотреть код';
            } else {
                codeBlock.style.display = 'block';
                button.textContent = 'Скрыть код';
                Prism.highlightElement(codeBlock); // Подсветка синтаксиса
            }
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
