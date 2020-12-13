function assignObj(obj1, obj2) {
    //return finObj = {...obj1, ...obj2};   А так можно было сделать?
    let result = {};

    for(let key in obj1) {
        if(obj1.hasOwnProperty(key)) {
            result[key] = obj1[key];
        }
    }

    for(let key in obj2) {
        if(obj2.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }

    return result;
}


someObj = {
    a: 65,
    b: 20,
    c: 5,
    d: 1
}

anotherObj = {
    a: 30,
    e: 40,
    d: 35
}

console.log(assignObj(someObj, anotherObj));