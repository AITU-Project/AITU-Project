let currentStep = 0;
const steps = document.querySelectorAll(".form-step");

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle("active", index === step);
    });
}

function nextStep() {
    currentStep++;
    showStep(currentStep);
}

function previousStep() {
    currentStep--;
    showStep(currentStep);
}

async function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newpassword').value;
    const role = "user"; 
    const gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(JSON.stringify({ name, surname, email, password, role, gender }));

    try {
        const response = await fetch('http://185.198.152.96:8000/check_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, surname, email, password, role, gender })
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке данных');
        }

        const result = await response.json();
        console.log('Ответ сервера:', result);

        if (result.success) {
            alert('Регистрация прошла успешно!');
            window.location.href = 'https://www.youtube.com';
        } else {
            alert(result.detail || 'Произошла ошибка');
        }

    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    }
}

document.getElementById('MultiStepForm').addEventListener('submit', submitForm);



// function validateStep1() {
//     const phoneInput = document.getElementById("phone_number");
//     const phoneError = document.getElementById("phoneError");
    
//     // Clear previous error messages
//     phoneError.textContent = "";

//     if (!phoneInput.value.match(/(\+7|8)?[0-7]\d{9}/)) {
//         phoneError.textContent = "Пожалуйста, введите действительный номер телефона.";
//         return false;
//     }
//     return true;
// }

function validateStep2() {
    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.textContent = "");

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Пожалуйста, введите ваше имя.";
        isValid = false;
    }

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!emailInput.validity.valid) {
        emailError.textContent = "Пожалуйста, введите действительный адрес электронной почты.";
        isValid = false;
    }

    const newpasswordInput = document.getElementById("newpassword");
    const newpasswordError = document.getElementById("newpasswordError");
    if (newpasswordInput.value.trim() === "") {
        newpasswordError.textContent = "Пожалуйста, введите новый пароль.";
        isValid = false;
    }

    const surnameInput = document.getElementById("surname");
    const surnameError = document.getElementById("surnameError");
    if (surnameInput.value.trim() === "") {
        surnameError.textContent = "Пожалуйста, введите вашу фамилию.";
        isValid = false;
    }

    const genderError = document.getElementById("genderError");
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderError.textContent = "Пожалуйста, выберите пол.";
        isValid = false;
    }

    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (newpasswordInput.value !== passwordInput.value) {
        passwordError.textContent = "Пароли не совпадают.";
        isValid = false;
    }

    if (isValid) {
        alert("Форма успешно отправлена!");
    }
}
