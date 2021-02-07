class MenuItem {
    constructor(title, action, closeContext = true) {
        this.title = title;
        this.action = action;
        this.closeContext = closeContext;
    }

    getItemTemplate() {
        return `
        <div class="menu-item ${this.closeContext ? '' : 'stop-propagate'}" data-action="${this.action}">
            <span class="menu-item__title">${this.title}</span>
        </div>
        `
    }
}


const KEY_LEFT = 'key_left';
const KEY_RIGHT = 'key_right';
const KEY_JUMP = 'key_jump';
const KEY_RNG_COL = 'key_rng_col';
const KEY_ADD = 'key_add';
const KEY_RESET = 'key_reset';

const ACTIONS = {
    [KEY_LEFT]: KEY_LEFT,
    [KEY_RIGHT]: KEY_RIGHT,
    [KEY_JUMP]: KEY_JUMP,
    [KEY_RNG_COL]: KEY_RNG_COL,
    [KEY_ADD]: KEY_ADD,
    [KEY_RESET]: KEY_RESET
};

const cubeMenu = [
    new MenuItem('Left', ACTIONS[KEY_LEFT], 'move-left'),
    new MenuItem('Right', ACTIONS[KEY_RIGHT], 'move-right'),
    new MenuItem('Jump', ACTIONS[KEY_JUMP], 'move-jump'),
    new MenuItem('Change color', [KEY_RNG_COL], 'rng-col')
];

const contextMenuAdd = [
    new MenuItem('Add Character', ACTIONS[KEY_ADD], 'add-character'),
    new MenuItem('Reset', ACTIONS[KEY_RESET], 'reset')
];



window.addEventListener('load', () => {
    const target = document.body;
    const block = target.querySelector('.cube');
    const step = 10;
    const h = 50;
    let throttle = false;
    const throttleTime = 100;
    const struct = {
        [KEY_RNG_COL]: () => {
            block.style.background = getRandomColor();
        },
        [KEY_LEFT]: () => {
            cubeMove.left();
        },
        [KEY_RIGHT]: () => {
            cubeMove.right();
        },
        [KEY_JUMP]: () => {
            cubeMove.jump();
        }
    };



    target.innerHTML += `
    <div class="context-menu cube-menu">
        ${cubeMenu.map(item => item.getItemTemplate()).join('')}
    </div>      
    `;

    target.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (event) => {
            const handler = struct[item.dataset.action];

            if (handler) {
                handler();
            }
        })
    });

    let cubeMove = {
        sit: () => {
            block.style.transform = 'scale(1.15, 0.6)';
            skip = true;
        },
        up: () => {
            if (block.offsetTop <= 0) {
                block.style.top = block.offsetTop + step * 2 + 'px';
                return;
            }
            block.style.top = block.offsetTop - step + 'px';

            return;
        },
        down: () => {
            if (block.offsetTop + block.offsetHeight >= window.innerHeight) {
                block.style.top = block.offsetTop - step * 2 + 'px';
                return;
            }
            block.style.top = block.offsetTop + step + 'px';
            return;
        },
        left: () => {
            if (block.offsetLeft <= 0) {
                block.style.left = block.offsetLeft + step * 2 + 'px';
                return;
            }
            block.style.left = block.offsetLeft - step + 'px';
            return;
        },
        right: () => {
            if (block.offsetLeft + block.offsetWidth >= window.innerWidth) {
                block.style.left = block.offsetLeft - step * 2 + 'px';
                return;
            }
            block.style.left = block.offsetLeft + step + 'px';
            return;
        },
        jump: () => {
            if (block.offsetTop <= 0) {
                block.style.top = block.offsetTop + step * 2 + 'px';
                return;
            }
            block.style.top = block.offsetTop - h + 'px';
            setTimeout(() => block.style.top = block.offsetTop + h + 'px', 100);
            return;
        }
    }

    window.addEventListener('keydown', event => {

        if (throttle == true) {
            return true;
        }

        throttle = true;
        setTimeout(() => {
            throttle = false;
        }, throttleTime);


        if (event.keyCode == 17) {
            skip = true;
            cubeMove.sit();

        }

        if (event.keyCode == 38) {
            cubeMove.up();
        }

        if (event.keyCode == 40) {
            cubeMove.down();
        }

        if (event.keyCode == 37) {
            cubeMove.left();
        }

        if (event.keyCode == 39) {
            cubeMove.right();
        }

        if (event.keyCode == 32) {
            cubeMove.jump();
        }


    })

    document.addEventListener('click', () => {
        hideContextMenu();
    });

    /*document.addEventListener('contextmenu', event => {
        event.preventDefault();
        const contextMenu = document.querySelector('.context-menu.default-menu');
        contextMenu.style.left = event.clientX + 'px';
        contextMenu.style.top = event.clientY + 'px';
        hideContextMenu();
        contextMenu.classList.add('show');
    });*/

    document.querySelector('.cube').addEventListener('contextmenu', event => {
        event.stopPropagation();
        event.preventDefault();
        const contextMenu = document.querySelector('.context-menu.cube-menu');
        contextMenu.style.left = event.clientX + 'px';
        contextMenu.style.top = event.clientY + 'px';
        hideContextMenu();
        contextMenu.classList.add('show');
    });

    window.addEventListener('keyup', event => {

        if (event.keyCode == 17) {
            block.style.transform = 'scale(1, 1)';
            return;
        }

    });

    function hideContextMenu() {
        const contextMenus = document.querySelectorAll('.context-menu');
        contextMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }




});

function getRandomColor() {
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