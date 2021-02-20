window.addEventListener('load', () => {

    const blocksContainer = document.querySelector('.blocks');
    const buttons = blocksContainer.querySelectorAll('.counterBtn');
    const clearButton = document.querySelector('.clearAll');
    const setButton = document.querySelector('.setCount');
    const blockList = 2;
    
    loadNumbers();

    setButton.addEventListener('click', onSetCounterClick);
    clearButton.addEventListener('click', onButtonClearClick);

    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonCountClick);
    });

    function onButtonCountClick(event) {
        const currentId = event.target.dataset.blockId;
        const currenContainer = blocksContainer.querySelector('#id-' + currentId);
        const currenNumber = currenContainer.querySelector('.currentCount');

        let color = RNGbg();
        let storedNumber = localStorage['count' + currentId] === undefined ? 0 : JSON.parse(localStorage['count' + currentId]);
        
        storedNumber ++;
        localStorage['count' + currentId] = JSON.stringify(storedNumber);

        if(storedNumber > 50) {
            color = `rgb(255, 255, 255)`;
        }

        localStorage['color' + currentId] = JSON.stringify(color);
        currenContainer.style.background = color;

        currenNumber.innerHTML = `Counter: ${storedNumber}`;
    }

    function loadNumbers() {

        for(i = 1; i <= blockList; i++) {
            let currentBlock = blocksContainer.querySelector('#id-' + i);
            let currentCounter = currentBlock.querySelector('.currentCount');
            let storedNumber = localStorage['count' + i] === undefined ? 0 : JSON.parse(localStorage['count' + i]);
            let color = localStorage['color' + i] === undefined ? RNGbg() : JSON.parse(localStorage['color' + i]);
            currentBlock.style.background = color;
            localStorage['color' + i] = JSON.stringify(color);
            currentCounter.innerHTML = `Counter: ${storedNumber}`;
        }
    }

    function onButtonClearClick() {
        for(i = 1; i <= blockList; i++) {
            let storedNumber = localStorage['count' + i] === undefined ? 0 : JSON.parse(localStorage['count' + i]);
            storedNumber = 0;
            localStorage['count' + i] = JSON.stringify(storedNumber);
        }
        loadNumbers();
    }

    function onSetCounterClick() {
        const blockId = prompt('Block ID:');
        const currentBlock = blocksContainer.querySelector('#id-' + blockId);

        if(currentBlock === null) {
            alert('There is no such block');
            return;
        }

        let currentCounter = currentBlock.querySelector('.currentCount');

        const setNumber = Number(prompt('Set number:'));

        if(isNaN(setNumber)) {
            alert('This is not a number');
            return;
        }
        
        let color = RNGbg();

        if(setNumber > 50) {
            color = `rgb(255, 255, 255)`;
        }

        currentBlock.style.background = color;

        localStorage['count' + blockId] = JSON.stringify(setNumber);
        currentCounter.innerHTML = `Counter: ${setNumber}`;

    }

    function RNGbg() {
        const colors = [
            getRand(),
            getRand(),
            getRand()
        ]
        return `rgb(${colors})`;
    }

    function getRand() {
        return Math.floor(Math.random() * 256);
    }

})