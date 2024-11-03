document.getElementById('login-btn').addEventListener('click', async function (event) {
    const email = document.getElementById('email').value;
    const data = { email };
    
    const response = await fetch('http://185.198.152.96:8000/check_email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('Ответ сервера:', result);

    if (response.ok) {
        alert('Код отправлен на ваш email!');
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('verification-form').style.display = 'block';
    } else {
        alert(result.detail || 'Произошла ошибка');
    }
});

document.getElementById('verify-btn').addEventListener('click', async function (event) {
    const email = document.getElementById('email').value;
    const verificationCode = document.getElementById('verification-code').value;
    const data = { email, verification_code: parseInt(verificationCode) };
    
    const response = await fetch('http://185.198.152.96:8000/verify_code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('Ответ сервера:', result);

    if (response.ok) {
        alert('Код подтвержден!');
        document.getElementById('verification-form').style.display = 'none';
        document.getElementById('update-password-form').style.display = 'block';
    } else {
        alert(result.detail || 'Неверный код');
    }
});

document.getElementById('update-password-btn').addEventListener('click', async function (event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }
    
    const data = { email, new_password: password };
    await submitNewPassword(data);
});

async function submitNewPassword(data) {
    try {
        const response = await fetch('http://185.198.152.96:8000/change_password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const result = await response.json();
        console.log('Ответ сервера:', result);
    
        if (response.ok) {
            alert('Пароль успешно обновлён!');
            localStorage.setItem('token', result.token); 
            window.location.href = "https://www.youtube.com";
        } else {
            alert(result.detail || 'Произошла ошибка');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    }
}
