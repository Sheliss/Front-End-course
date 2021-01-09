n = 10;
m = 10;
arr = [];

function randArr(array, length, height) {

    for (let i = 0; i < height; i++) {

        array[i] = [];

        for (let j = 0; j < length; j++) {

            array[i][j] = Math.floor(Math.random() * 41) - 20;
        }
    }

    return array;

}

function arrWrite(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {

            document.write(array[i][j], ' | ');
        }
        document.write('<br />');
    }

    return;
}

function arrTranspose(array) {
    var newArr = [];

    for (let i = 0; i < array.length; i++) {

        newArr[i] = [];


        for (let j = 0; j < array[i].length; j++) {
            newArr[i][j] = array[j][i];
        }

    }

    return newArr;

}

function destroyNegative(array) {

    for (let i = 0; i < array.length; i++) {

        let rowSum = 0;

        for (let j = 0; j < array[i].length; j++) {
            
            rowSum += array[i][j];
        }

        if(rowSum < 0) {

            
            for(let j = 0; j < array[i].length; j++) {

                array[i][j] = '-';
                
            }

        }

    }

    return array;

}


arr = randArr(arr, n, m);

arrWrite(arr);

document.write('<br>');

arr = arrTranspose(arr);

arr = destroyNegative(arr);

arr = arrTranspose(arr);

arrWrite(arr);
