window.addEventListener('load', function () {

    const block = document.querySelector('.cube');
    const step = 10;
    const h = 50;
    let throttle = false;
    const throttleTime = 100;

    window.addEventListener('keydown', event => {

        if (throttle == true) {
            return true;
        }

        throttle = true;
        setTimeout(() => {
            throttle = false;
        }, throttleTime);

        if (event.keyCode == 17) {
            block.style.transform = 'scale(1.15, 0.6)';
            skip = true;
        }

        if (event.keyCode == 38) {
            if (block.offsetTop <= 0) {
                block.style.top = block.offsetTop + step * 2 + 'px';
                return;
            }
            block.style.top = block.offsetTop - step + 'px';
            return;
        }

        if (event.keyCode == 40) {

            if (block.offsetTop + block.offsetHeight >= window.innerHeight) {
                block.style.top = block.offsetTop - step * 2 + 'px';
                return;
            }
            block.style.top = block.offsetTop + step + 'px';
            return;
        }

        if (event.keyCode == 37) {
            if (block.offsetLeft <= 0) {
                block.style.left = block.offsetLeft + step * 2 + 'px';
                return;
            }
            block.style.left = block.offsetLeft - step + 'px';
            return;
        }

        if (event.keyCode == 39) {
            if (block.offsetLeft + block.offsetWidth >= window.innerWidth) {
                block.style.left = block.offsetLeft - step * 2 + 'px';
                return;
            }
            block.style.left = block.offsetLeft + step + 'px';
            return;
        }

        if (event.keyCode == 32) {

            if (block.offsetTop <= 0) {
                block.style.top = block.offsetTop + step * 2 + 'px';
                return;
            }
            block.style.top = block.offsetTop - h + 'px';
            setTimeout(() => block.style.top = block.offsetTop + h + 'px', 100);
            return;
        }


    })

    window.addEventListener('keyup', event => {

        if (event.keyCode == 17) {
            block.style.transform = 'scale(1, 1)';
            return;
        }

    });




});