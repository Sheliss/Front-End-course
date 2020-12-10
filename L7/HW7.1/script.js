
function filter(arr, ruleArr) {

    for(let i = 0; i < ruleArr.length; i++) {


        arr = arr.replace(ruleArr[i], '');
    
    }

    return arr;

}

string = prompt('Enter string');
rule = ['!', '/', 'a', '_'];
document.write(string, '<br />');

string = filter(string, rule);

document.write(string);