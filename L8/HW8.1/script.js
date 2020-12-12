//Я знаю что можно было использовать Math.max, но если в массиве попадалась строка он возвращает NaN

function getMaxs() {

    let maxArr = [];

    for (let i = 0; i < arguments.length; i++) {

        let max = -Infinity;

        for (let j = 0; j < arguments[i].length; j++) {

            if (arguments[i][j] > max) {
                max = arguments[i][j];
            }

        }

        maxArr.push(max);

    }

    return maxArr.join(', ');

}

someArr = [2, 3, 'afsd', 6];
secondArr = [5, 45, 34, 2];
thirdArr = [6, 71, 31, -71, 3];
anotherArr = ['d', 1, 2, 3];

console.log(getMaxs(someArr, secondArr, thirdArr));
console.log(getMaxs(anotherArr, secondArr));
