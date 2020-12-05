
function arrSum (arr, sum) {

    for(let i = 0; i < arr.length; i++) {

        if(typeof arr[i] == 'number') {

            sum += arr[i];

        } 
    }
    return sum;

}


function compArr (arr1, arr2) {

    arrSum1 = 0;
    arrSum2 = 0;

    arrSum1 = arrSum(arr1, arrSum1);
    arrSum2 = arrSum(arr2, arrSum2);
    
    if(arrSum1 > arrSum2) {
        document.write('Сумма первого массива больше');
        return arr1;
    }

    if(arrSum2 > arrSum1) {
        document.write('Сумма второго массива больше');
        return arr2;
    }

}


someArr = [ 1, 2, 'word', 3];

anotherArr = [ 1, 1, 3];

compArr(someArr, anotherArr);






