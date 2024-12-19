document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const viewCodeButtons = document.querySelectorAll('.view-code-btn');

    // Функция для переключения активной страницы
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс к нажатой кнопке
            button.classList.add('active');

            // Получаем целевую страницу
            const target = button.getAttribute('data-target');

            // Скрываем все страницы
            pages.forEach(page => page.classList.remove('active'));

            // Показываем целевую страницу
            document.getElementById(target).classList.add('active');
        });
    });

    // Функция для показа/скрытия блока с кодом
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

    // Анимация появления карточек при загрузке
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
