let form = document.querySelector('.formValid');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = form.querySelector('.formName');
    let fields = form.querySelectorAll('.field');

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.error('The fields are empty');
            return;
        }
    }

    let letters = /^[A-za-z]+$/;

    if (!name.value.match(letters)) {
        console.error('Use only english letters for name')
        return;
    }

    form.submit();
})