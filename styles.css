/* Основные стили */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* Верхняя панель */
header {
    background-color: #1f1f1f;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

header h1 {
    font-size: 1.5em;
    color: #ff6347;
}

/* Основной контент */
main {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    position: relative;
}

.page {
    display: none;
    animation: fadeIn 0.5s ease-in-out;
}

.page.active {
    display: block;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h2 {
    margin-bottom: 15px;
    color: #ff6347;
    text-align: center;
}

p {
    text-align: center;
    line-height: 1.5;
}

/* Список шаблонов */
.templates-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Карточка шаблона */
.template-card {
    background-color: #1e1e1e;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
}

.template-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
}

.project-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
}

.project-info h3 {
    margin-bottom: 10px;
    color: #ffa07a;
    font-size: 1.2em;
}

.project-info p {
    font-size: 0.95em;
    color: #c0c0c0;
}

.view-code-btn {
    background-color: #ff6347;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
}

.view-code-btn:hover {
    background-color: #e5533d;
}

.code-block {
    display: none;
    margin-top: 10px;
    background-color: #2d2d2d;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    font-size: 0.9em;
}

/* Нижняя навигационная панель */
.bottom-nav {
    background-color: #1f1f1f;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0 -2px 5px rgba(0,0,0,0.5);
}

.nav-btn {
    background: none;
    border: none;
    color: #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.75em;
    cursor: pointer;
    transition: color 0.3s;
}

.nav-btn i {
    font-size: 1.2em;
    margin-bottom: 5px;
}

.nav-btn.active,
.nav-btn:hover {
    color: #ff6347;
}

/* Футер */
footer {
    background-color: #1f1f1f;
    text-align: center;
    padding: 10px;
    font-size: 0.8em;
    color: #a0a0a0;
    box-shadow: 0 -2px 5px rgba(0,0,0,0.5);
}

/* Анимации */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Медиа-запросы для адаптивности */
@media (max-width: 600px) {
    header h1 {
        font-size: 1.2em;
    }

    .template-card h3 {
        font-size: 1em;
    }

    .project-image {
        height: 120px;
    }

    pre {
        font-size: 0.8em;
    }

    .nav-btn span {
        display: none;
    }
}
