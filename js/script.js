const btn = document.querySelector(".btn");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;




btn.addEventListener("click", () => {
    // =======username validation=======
    if (!username.value) {
        nameError.innerHTML = "Name is required";
        username.style.border = "1px solid red";
    }else if(username.value.length > 14){
        nameError.innerHTML = "Name must be less than 15 characters";
        username.style.border = "1px solid red";
    }else if(username.value.length < 4){
        nameError.innerHTML = "Name must be at least 4 characters";
        username.style.border = "1px solid red";
    }else{
        nameError.innerHTML = "";
        username.style.border = "1px solid gray";
    }
    // =======username validation=======

    // =======email validation=======
    if (!email.value) {
        emailError.innerHTML = "Email is required";
        email.style.border = "1px solid red";   
    }else if(!emailRegex.test(email.value)){
        emailError.innerHTML = "Please enter a valid email";
        email.style.border = "1px solid red";
    }else{
        emailError.innerHTML = "";
        email.style.border = "1px solid gray";
    }
    // =======email validation=======

    // =======password validation=======
    if (!password.value) {
        passwordError.innerHTML = "Password is required";
        password.style.border = "1px solid red";
    }else if(password.value.length < 6){
        passwordError.innerHTML = "Password must be at least 6 characters";
        password.style.border = "1px solid red";
    }else if(password.value.length > 20){
        passwordError.innerHTML = "Password must be less than 10 characters";
        password.style.border = "1px solid red";
    }else if(!strongPasswordRegex.test(password.value)){
        passwordError.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        password.style.border = "1px solid red";
    }else{
        passwordError.innerHTML = "";
        password.style.border = "1px solid gray";
    }
    // =======password validation=======

    // =======confirm password validation=======
    if (!confirmpassword.value) {
        confirmPasswordError.innerHTML = "Please confirm your password";
        confirmpassword.style.border = "1px solid red";
    }else if(password.value !== confirmpassword.value){
        confirmPasswordError.innerHTML = "Passwords do not match";
        confirmpassword.style.border = "1px solid red";
    }else{
        confirmPasswordError.innerHTML = "";
        confirmpassword.style.border = "1px solid gray";
    }
    // =======confirm password validation=======
})