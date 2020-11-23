a = 10;

arr = new Array();

for(i = 0; i < a; i++) {

    arr[i] = Math.floor(Math.random() * 11);

}

document.write('Оригинальный массив: ');
document.write(arr, '<br />');


for(i = 0, j = arr.length - 1; i < j; i++, j--) {

    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;

}


document.write('Перевернутый массив: ');
document.write(arr);