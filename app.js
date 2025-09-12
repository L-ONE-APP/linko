const TG = window.Telegram.WebApp;
const user = TG.initDataUnsafe.user;

const div = document.getElementById('username');

const username = user.username || '';

div.innerHTML = `
<div class="cls"><p class="txt">Username: ${username}</p></div>`