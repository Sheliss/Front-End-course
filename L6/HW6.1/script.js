function fillArray(length, arr) {

    for(let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 11);
    }

    return arr;
}


a = prompt('Какой длинны сгенерировать массив?');
randArr = [];

fillArray(a, randArr);

document.write('Случайный массив: <br />', randArr);
