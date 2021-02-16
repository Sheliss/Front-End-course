window.addEventListener('load', () => {

    const products = [
        {
            id: "id-1",
            name: 'Product',
            price: '100',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id-2",
            name: 'Product 2',
            price: '300',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id-3",
            name: 'Product 3',
            price: '500',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id-4",
            name: 'Product 4',
            price: '360',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        }
    ];


    
    const productsContainer =  document.querySelector('.products');
    const cartContainer = document.querySelector('.product_quantity');
    //let productQuantity = localStorage.productCart === undefined ? {} : JSON.parse(localStorage.productCart);
  


    productsContainer.innerHTML = `${products.map(item => {
        let name = item.name;

        if(!name) {
            name = 'Default name';
        }

        return `
        <div class="product solid">   
            <div class="product__title ${item.name ? '' : 'grey'}">${name}</div>
            <img class="product__image" src="${item.image}">
            <div class="product__price">
                <button class="product__action" data-product-id="${item.id}">Add</button>
                <span>${item.price}</span>
            </div>  
        </div>
    `;
    }).join('')}`;


    
    const buttons = productsContainer.querySelectorAll('button.product__action');
    /*const totalContainer = document.querySelector('#total');
    totalContainer.innerHTML = localStorage.totalPrice === undefined ? 0 : JSON.parse(localStorage.totalPrice);*/

    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonAddClick)
    })


    let cartLogic = class {
        constructor() {
            this.cartArray = [];
            this.cartItem = {};
            this.checkLocalCart();
        }

        saveCart() {
            localStorage.localCart = JSON.stringify(this.cartArray);
        }

        loadCart() {
            this.cartArray = JSON.parse(localStorage.localCart);
        }

        checkLocalCart() {
            if(localStorage.localCart != undefined) {
                this.loadCart();
            }
        }

        getItem(id, name, price, count) {
            return {
                id: id,
                name: name,
                price: price,
                count: count
            }
        }

        addItem(id, name, price, count) {
            for(let item in this.cartArray) {
                if(this.cartArray[item] != undefined && this.cartArray[item].id === id) {
                    this.cartArray[item].count ++;
                    this.saveCart();
                    return;
                }
            }
            let item = this.getItem(id, name, price, count);
            this.cartArray.push(item);
            this.saveCart();
        }

        totalCartPrice(currecy) {
            let totalPrice = 0;

            for(let item in this.cartArray) {
                totalPrice += this.cartArray[item].price * this.cartArray[item].count;
            }

            if (currecy == '2') {
                totalPrice *= 1.5;
            }

            if (currecy == '3') {
                totalPrice *= 2;
            }

            return Number(totalPrice);
        }

        returnCart() {
            return this.cartArray;
        }

        clearCart() {
            this.cartArray = [];
            this.saveCart();
        }

        removeCount(id) {
            for(let item in this.cartArray) {
                if(this.cartArray[item] != undefined && this.cartArray[item].id === id) {
                    this.cartArray[item].count --;
                    if(this.cartArray[item].count === 0) {
                        this.cartArray.splice(item, 1);
                    }
                    break;
                }
            }
            this.saveCart();
        }

        addCount(id) {
            for(let item in this.cartArray) {
                if(this.cartArray[item] != undefined && this.cartArray[item].id === id) {
                    this.cartArray[item].count ++;
                }
            }
            this.saveCart();
        }

    }

    let productCart = new cartLogic;

    function displayCart() {
        let cartArray = productCart.returnCart();
        
        if (Object.keys(cartArray).length == 0) {
            cartContainer.innerHTML = "";
            return;
        }

        cartContainer.innerHTML = `
            <div class="cartTitle">Cart</div>
            ${cartArray.map(item => {
                return `
                    <div class="cart__item item">
                        <div class="item__name">${item.name}</div>
                        <div class="item__totalPrice">${item.price * item.count}</div>
                        <div class="item__count">${item.count}</div>
                        <div class="item__change">
                            <button class="item__minus" data-product-id="${item.id}">-</button>
                            <button class="item__plus" data-product-id="${item.id}">+</button>
                        </div>
                    </div>
                `

            }).join('')}
            <div class="totalPrice">
                <div class="cartTotal">Total price: ${productCart.totalCartPrice()}</div>
                <select class="currency">
                    <option value="1">UAN</option>
                    <option value="2">EUR</option>
                    <option value="3">USD</option>
                </select>
            </div>
            <button class="clear__cart">Clear cart</button>
        `;

        const minusBtn = cartContainer.querySelectorAll('button.item__minus');
        onButtonMinusClick(minusBtn);
        
        const plusBtn = cartContainer.querySelectorAll('button.item__plus');
        onButtonPlusClick(plusBtn);

        const clearBtn = cartContainer.querySelector('button.clear__cart');
        onButtinClearClick(clearBtn);

        const currency = cartContainer.querySelector('.currency');
        onCurrencyChange(currency);
        
    }

    function onCurrencyChange(currency) {
        currency.addEventListener('change', () => {
            let currentCurrency = currency.value;
            let currentPrice = productCart.totalCartPrice(currentCurrency);

            const priceCounter = cartContainer.querySelector('.cartTotal');

            priceCounter.innerHTML = `
            Total price: ${currentPrice}
            `;


        });
    }

    function onButtonMinusClick(btn) {
        let buttons = btn;

        buttons.forEach(current => {
            current.addEventListener('click', () => {
                const currentId = current.dataset.productId;
                productCart.removeCount(currentId);
                displayCart();
            });
        });
    }

    function onButtonPlusClick(btn) {
        let buttons = btn;

        buttons.forEach(current => {
            current.addEventListener('click', () => {
                const currentId = current.dataset.productId;
                productCart.addCount(currentId);
                displayCart();
            });
        });
    }

    function onButtinClearClick(btn) {
        btn.addEventListener('click', () => {
            productCart.clearCart();
            displayCart();
        });
    }

    function onButtonAddClick(event) {
        const productId = event.target.dataset.productId;
        const currentProduct = products.find(item => item.id == productId);
        const storageCost = localStorage.totalPrice === undefined ? 0 : JSON.parse(localStorage.totalPrice);
        /*localStorage.totalPrice = storageCost + Number(currentProduct.price);
        totalContainer.innerHTML = localStorage.totalPrice;*/

        
        productCart.addItem(currentProduct.id, currentProduct.name, currentProduct.price, 1);

        displayCart();
    }

    displayCart();

})