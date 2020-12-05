function doMath(x, y, znak) {
    for (var i = 0; i < 1; i++) {

        x = prompt('input X');

        if (x === null) {
            return;
        } else {
            x = parseInt(x);
        }

        if (Number.isInteger(x)) {
            x = x;
        } else {
            alert("enter number");
            i--;
        }
    }

    for (var i = 0; i < 1; i++) {

        znak = prompt('input znak');


        if (znak === null) {
            return;
        }

        if (znak === '+' || znak === '-' || znak === '*' || znak === '/' || znak === '%' || znak === '^') {
            znak = znak;

        } else {
            alert("enter znak +,-,*,/, %, ^");
            i--;
        }
    }

    for (var i = 0; i < 1; i++) {

        y = prompt('input Y');

        if (y === null) {
            return;
        } else {
            y = parseInt(y);
        }

        if (Number.isInteger(y)) {
            y = y;
        } else {
            alert("enter number");
            i--;
        }
    }

    if (znak === '+') {
        var result = x + y;
        alert(result);
    }

    if (znak === '-') {
        var result = x - y;
        alert(result);
    }

    if (znak === '*') {
        var result = x * y;
        alert(result);
    }

    if (znak === '/') {
        var result = x / y;
        alert(result);
    }

    if (znak === '%') {
        var result = x % y;
        alert(result);
    }

    if (znak === '^') {
        var result = x ** y;
        alert(result);
    }

}

doMath();