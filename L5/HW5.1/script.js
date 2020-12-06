allArrays = new Array;
sum = 0;


someObj = {
    name: 'First String',
    number: 5,
    anotherNumbes: [5, 6, 7, 1]
}

anotherObj = {
    name: 'Some',
    numbers: [1, 2, 4],
    array: [6, 'a', 8, 1],
    country: 'none'
}



for (let key in someObj) {

    let temp = someObj[key];

    if (Array.isArray(temp)) {
        allArrays = allArrays.concat(someObj[key]);
    }

}

for (let key in anotherObj) {

    let temp = anotherObj[key];

    if (Array.isArray(temp)) {
        allArrays = allArrays.concat(anotherObj[key]);
    }

}


for (let i = 0; i < allArrays.length; i++) {

    if (typeof allArrays[i] == 'number') {
        console.log(allArrays[i]);
        sum += allArrays[i];
    }

}

document.write(sum);