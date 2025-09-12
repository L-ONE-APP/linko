document.addEventListener('DOMContentLoaded', () => {

    // Функция для развертывания приложения на весь экран
    const expandApp = () => {
        if (window.WebApp) {
            // Предпочитаем requestFullscreen, так как он убирает верхний заголовок
            if (window.WebApp.requestFullscreen) {
                window.WebApp.requestFullscreen();
            } else {
                // Если не поддерживается, используем expand()
                window.WebApp.expand();
            }
        }
    };

    // Функция для отображения информации о пользователе
    const displayUserInfo = () => {
        if (window.WebApp && window.WebApp.initDataUnsafe) {
            const user = window.WebApp.initDataUnsafe.user;
            if (user) {
                document.getElementById('user-info').textContent = `@${user.username}`;
                document.getElementById('user-id').textContent = `ID: ${user.id}`;
                document.getElementById('first-name').textContent = `Имя: ${user.first_name}`;
                if (user.last_name) {
                    document.getElementById('last-name').textContent = `Фамилия: ${user.last_name}`;
                }
                document.getElementById('language-code').textContent = `Язык: ${user.language_code}`;
            }
        }
    };

    // Вызываем функции при старте приложения
    expandApp();
    displayUserInfo();
});