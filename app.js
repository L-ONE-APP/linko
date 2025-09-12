const TG = window.Telegram.WebApp;

const user = TG.initDataUnsafe.user;

if (user) {
    const userId = user.id;
    const firstName = user.firest_name;
    const lastName = user.last_name || '';
    const photoUrl = user.photo_url || '';
    const username = user.username || '';

    const UserInfo = document.getElementById('info');
    UserInfo.innerHTML = `<p><strong>Имя:</strong>@${username}</p>`
}