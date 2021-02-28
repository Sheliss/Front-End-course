let startBtn = document.querySelector('.start');
let input = document.querySelector('.input');
let inputArray = [];

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    input.disabled = false;

    let readInput = new Promise((resolve, reject) => {
        input.addEventListener('keydown', (event) => {
            if(event.keyCode === 13) {
                let bufferNumber = input.value;
                if(bufferNumber != '') {
                    inputArray.push(bufferNumber);
                    input.value = '';
                }
                input.disabled = true;
                setTimeout(() => {
                    input.disabled = false;
                }, 1000)
            }
        })

        setTimeout(() => {
            startBtn.disabled = false;
            input.disabled = true;
            resolve();
        }, 10000)
    })

    readInput.then(() => {
        console.log(inputArray);
        clearTimeout(input);
        input.value = '';
        inputArray = [];
    })
})
