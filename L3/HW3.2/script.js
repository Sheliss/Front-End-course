h = prompt('Высота прямоугольника');
w = prompt('Ширина прямоугольника');


for(i = 0; i < w; i++) {
    document.write('*');
}

document.write('<br />');

for(i = 2; i < h; i++) {

    document.write('*');

    for(j = 2; j < w; j++) {
        document.write('&nbsp;&nbsp;');
    }

    document.write('*<br />');

}

for(i = 0; i < w; i++) {
    document.write('*');
}