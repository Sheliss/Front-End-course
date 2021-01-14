window.addEventListener('load', function () {
    let barItem = document.querySelector('.bar');
    let greenItem = document.querySelector('.green');
    let redItem = document.querySelector('.red');
    document.getElementById('range').addEventListener('mousemove', event => {
        let barH = document.getElementById('range').value;
        barItem.style.height = barH + 'px';
    });
    document.getElementById('number').addEventListener('change', event => {
        let greenH = document.getElementById('number').value;
        let taxP = tax(greenH);
        let redH = greenH / 100 * taxP;
        redItem.style.height = redH + '%';
        greenItem.style.height = greenH + '%';
    });

    function tax(num) {
        if (num < 20) {
            return 2;
        }
        if (num >= 20 && num < 50) {
            return 4;
        }
        if (num >= 50 && num < 75) {
            return 6;
        }
        if (num >= 75) {
            return 8;
        }
    };


});