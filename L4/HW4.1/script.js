n = 20;
m = 20;
center = Math.floor(n/2);

for(i = 1; i <= n; i++) {
    for(j = 1; j <= m; j++) {

        if (i > j && i + j <= n + 1 || j > center && i + j <= n + 1) {
            document.write('* ');
        } else 

        document.write('# ');
    }
    document.write('<br />');
}