length = 10;
prev = null;
arr1 = new Array();
arr2 = new Array();
arrSame = new Array();

for(i = 0; i < length; i++) {

    arr1[i] = Math.floor(Math.random() * 11);
    arr2[i] = Math.floor(Math.random() * 11);

}

arrays = 'Случайные два массива: <br />' + arr1 + '<br />' + arr2 + '<br />';

arr1 = arr1.sort();

for(i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] != prev) {

        for(j = 0; j < arr2.length -1; j++) {

            if (arr1[i] == arr2[j]) {
                arrSame.push(arr1[i]);
                break;
            }

        }

    }

    prev = arr1[i];
}

arrays = arrays + 'Числа которые попадаются в обоих массивах: <br />' + arrSame;

document.write(arrays);

