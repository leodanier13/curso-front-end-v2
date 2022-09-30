const submit = document.querySelector('button');

function validate(a, b) {
    if (!a || !b) {
        return {
            valid: false,
            message: 'Preencha os números para A e B'
        }
    }

    if (b > a) {
        return {
            valid: true,
            message: 'Esse número é maior que A'
        }
    }

    return {
        valid: false,
        message: 'Esse número é menor que A, coloque um número válido'
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const feedback = document.querySelector('.feedback');

    const a = document.querySelector('#a').value;
    const b = document.querySelector('#b').value;

    const { valid, message } = validate(a, b);

    if (valid) {
        feedback.classList.add('valid');
        feedback.classList.remove('invalid');
    } else {
        feedback.classList.remove('valid');
        feedback.classList.add('invalid');
    }

    feedback.innerHTML = message;
})