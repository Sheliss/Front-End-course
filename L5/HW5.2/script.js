function filter(arr, ruleArr) {


    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < ruleArr.length; j++) {

            magic = new RegExp(ruleArr[j], "g");
            arr[i] = arr[i].replace(magic, '');

        }

    }

    return arr;

}



str1 = 'gggrand1';
str2 = 'ze____ro!';
str3 = 'no////thing';
restrictedList = ['!', 'g', '_', '/'];


vList = [str1, str2, str3];

console.log(vList[0], vList[1], vList[2]);

vList = filter(vList, restrictedList);

console.log(vList[0], vList[1], vList[2]);