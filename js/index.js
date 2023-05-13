//definición del objeto elementos que va a contener los ids y clases de nuestros elementos
elements = {
    SignUpButton: "#sign-up-btn",
    RegisterButton: "#register-btn",
}

//definición de constantes que referencian elementos html
const signUpButton = document.querySelector(elements.SignUpButton);
const registerButton = document.querySelector(elements.RegisterButton);

//comportamiento de los elementos
signUpButton.addEventListener('click', () => {
    window.location.href = 'register.html';
})

registerButton.addEventListener('click', () => {
    window.location.href = 'register.html';
})