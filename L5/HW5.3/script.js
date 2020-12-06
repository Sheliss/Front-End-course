function doMath(x, y, znak) {

    x = parseInt(x);
    y = parseInt(y);

    if (znak != '+' && znak != '-' && znak != '*' && znak != '/' && znak != '%' && znak != '^') {
        errorSign = true;
        return errorSign;
    }


    if (znak === '+') {
        result = x + y;
    }

    if (znak === '-') {
        result = x - y;
    }

    if (znak === '*') {
        result = x * y;
    }

    if (znak === '/') {
        result = x / y;
    }

    if (znak === '%') {
        result = x % y;
    }

    if (znak === '^') {
        result = x ** y;
    }

    return result;

}


errorSign = false;
result = null;
x = prompt('Введите первое число');
znak = prompt('Введите знак');
y = prompt('Введите второе число');

doMath(x, y, znak);

if (errorSign == true) {
    document.write('Знак может быть только: +,-,*,/, %, ^');
}

if (errorSign == false) {
    document.write(x, ' ', znak, ' ', y, ' = ', result);
}