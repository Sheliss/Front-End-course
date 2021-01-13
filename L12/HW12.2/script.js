window.addEventListener('load', function(){

    const block = document.querySelector('.cube');
    const step = 10;
    const text = document.querySelector('.text');
    let throttle = false;
    const throttleTime = 100;

    window.addEventListener('keydown', event => {

        if(throttle == true) {
            return true;
        }

        throttle = true;
        setTimeout(() => {
            throttle = false;
        }, throttleTime);   

        if(event.keyCode == 38) {
            if(block.offsetTop <= 0) {
                block.style.top = block.offsetTop + step*2 + 'px';
                visText();
                return;
            }
            block.style.top = block.offsetTop - step + 'px';
            return;
        }

        if(event.keyCode == 40) {
            if(block.offsetTop + block.offsetHeight >= window.innerHeight) {
                block.style.top = block.offsetTop - step*2 + 'px';
                visText();
                return;
            }
            block.style.top = block.offsetTop + step + 'px';
            return;
        }

        if(event.keyCode == 37) {
            if(block.offsetLeft <= 0) {
                block.style.left = block.offsetLeft + step*2 + 'px';
                visText();
                return;
            }
            block.style.left = block.offsetLeft - step + 'px';
            return;
        }

        if(event.keyCode == 39) {
            if(block.offsetLeft + block.offsetWidth >= window.innerWidth) {
                block.style.left = block.offsetLeft - step*2 + 'px';
                visText();
                return;
            }
            block.style.left = block.offsetLeft + step + 'px';
            return;
        }
    })


    function visText() {
        text.style.visibility = 'visible';

        setTimeout(() => text.style.visibility = 'hidden', 2000);

        return;
    }
    
    


});