
function filter(arr, ruleArr) {

    for(let i = 0; i < ruleArr.length; i++) {


        arr = arr.replace(ruleArr[i], '');
    
    }

    return arr;

}



str1 = 'grand1';
str2 = 'ze_ro!';
str3 = 'no/thing';
restrictedList =  ['!', 'g', '_', '/']; 

console.log(str1);
console.log(str2);
console.log(str3);

str1 = filter(str1, restrictedList);
str2 = filter(str2, restrictedList);
str3 = filter(str3, restrictedList);

console.log(str1);
console.log(str2);
console.log(str3);