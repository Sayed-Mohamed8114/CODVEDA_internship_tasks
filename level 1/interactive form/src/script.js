// input labels 
const name1 = document.getElementById('username');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// error small labels
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let telephoneError = document.getElementById('telephoneError');
let passwordError = document.getElementById('passwordError');
let confirmError = document.getElementById('confirmError');

// Success message
const successMessage = document.getElementById('successMessage');

// helper functions
function setError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("error");
    input.classList.remove("success");
}

function setSuccess(input, errorElement) {
    errorElement.textContent = "";
    input.classList.add("success");
    input.classList.remove("error");
}

// name check function 
function check_name(name1) {
    const nameString = name1.value.trim();
    const len = nameString.length;
    if (len === 0) {
        setError(name1, nameError, "your name can't be empty");
    } else if (len < 3) {
        setError(name1, nameError, "your name must be at least 3 letters");
    } else {
        setSuccess(name1, nameError);
    }
}

// check email function 
function check_email(email) {
    const emailString = email.value.trim();
    if (!emailString.includes("@") || !emailString.includes(".")) {
        setError(email, emailError, "invalid email format");
    } else {
        setSuccess(email, emailError);
    }
}

// check telephone function
function check_phone() {
    const value = telephone.value.trim();
    if (!/^[0-9]{11}$/.test(value)) {
        setError(telephone, telephoneError, "phone must be 11 digits");
    } else {
        setSuccess(telephone, telephoneError);
    }
}

// check password function
function check_pass() {
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    if (pass.length < 6) {
        setError(password, passwordError, "password too short");
    } else if (!/[0-9]/.test(pass)) {
        setError(password, passwordError, "add at least one number");
    } else if (!/[!@#$%^&*]/.test(pass)) {
        setError(password, passwordError, "add special character '!@#$%^&*'");
    } else {
        setSuccess(password, passwordError);
    }

    if (pass !== confirmPass) {
        setError(confirmPassword, confirmError, "passwords do not match");
    } else {
        setSuccess(confirmPassword, confirmError);
    }
}

// input events
name1.addEventListener("input", () => check_name(name1));
email.addEventListener("input", () => check_email(email));
telephone.addEventListener("input", () => check_phone());
password.addEventListener("input", () => check_pass());
confirmPassword.addEventListener("input", () => check_pass());

// blur events
name1.addEventListener("blur", () => check_name(name1));
email.addEventListener("blur", () => check_email(email));
telephone.addEventListener("blur", () => check_phone());
password.addEventListener("blur", () => check_pass());
confirmPassword.addEventListener("blur", () => check_pass());

// submit
document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();

    check_name(name1);
    check_email(email);
    check_phone();
    check_pass();

    const noErrors = nameError.textContent === "" &&
                     emailError.textContent === "" &&
                     telephoneError.textContent === "" &&
                     passwordError.textContent === "" &&
                     confirmError.textContent === "";

    if (noErrors) {
        successMessage.textContent = "form submitted successfully! ";
        document.getElementById("form").reset();
        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("success");
            input.classList.remove("error");
        });
        setTimeout(() => {
        successMessage.textContent = "";
    }, 2000);
    }
});