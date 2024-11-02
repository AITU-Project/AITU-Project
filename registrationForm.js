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

    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://185.198.152.96:8000/check_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке данных');
        }

        const result = await response.json();
        console.log('Ответ сервера:', result);

    } catch (error) {
        console.error('Ошибка:', error);
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

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = "");

    // Validate Name
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Пожалуйста, введите ваше имя.";
        isValid = false;
    }

    // Validate Email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!emailInput.validity.valid) {
        emailError.textContent = "Пожалуйста, введите действительный адрес электронной почты.";
        isValid = false;
    }

    // Validate New Password
    const newpasswordInput = document.getElementById("newpassword");
    const newpasswordError = document.getElementById("newpasswordError");
    if (newpasswordInput.value.trim() === "") {
        newpasswordError.textContent = "Пожалуйста, введите новый пароль.";
        isValid = false;
    }

    // Validate Surname
    const surnameInput = document.getElementById("surname");
    const surnameError = document.getElementById("surnameError");
    if (surnameInput.value.trim() === "") {
        surnameError.textContent = "Пожалуйста, введите вашу фамилию.";
        isValid = false;
    }

    // Validate Gender
    const genderError = document.getElementById("genderError");
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderError.textContent = "Пожалуйста, выберите пол.";
        isValid = false;
    }

    // Validate Password Match
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
