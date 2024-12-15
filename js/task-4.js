const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formEl = event.target.elements;

    const fields = [formEl.email, formEl.password];
    const isAnyFieldEmpty = fields.some(field => field.value.trim() === '');

    if (isAnyFieldEmpty) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        [formEl.email.name]: formEl.email.value.trim(),
        [formEl.password.name]: formEl.password.value.trim(),
    };

    console.dir(formData);

    loginForm.reset();
});