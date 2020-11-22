a = 10;

arr = new Array();

for(i = 0; i < a; i++) {

    arr[i] = Math.floor(Math.random() * 11);

}

document.write('Оригинальный массив: ');
document.write(arr, '<br />');

arr = arr.map(arr.pop,[...arr]);

document.write('Перевернутый массив: ');
document.write(arr);