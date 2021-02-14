window.addEventListener('load', () => {

    const products = [
        {
            id: "id-1",
            name: 'Title 1',
            price: '100',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id-2",
            name: 'Title 2',
            price: '300',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id-3",
            name: 'Title 3',
            price: '500',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        }
    ];


    
    const productsContainer =  document.querySelector('.products');
    const cartContainer = document.querySelector('.product_quantity');
    let productQuantity = localStorage.productCart === undefined ? {} : JSON.parse(localStorage.productCart);
    

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
    const totalContainer = document.querySelector('#total');
    totalContainer.innerHTML = localStorage.totalPrice === undefined ? 0 : JSON.parse(localStorage.totalPrice);

    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonAddClick)
    })

    function onButtonAddClick(event) {
        const productId = event.target.dataset.productId;
        const currentProduct = products.find(item => item.id == productId);
        const storageCost = localStorage.totalPrice === undefined ? 0 : JSON.parse(localStorage.totalPrice);
        localStorage.totalPrice = storageCost + Number(currentProduct.price);
        totalContainer.innerHTML = localStorage.totalPrice;
        const localProductQuantity = productQuantity[currentProduct.id] === undefined ? 0 : productQuantity[currentProduct.id];
        productQuantity[currentProduct.id] = localProductQuantity + 1;
        localStorage.productCart = JSON.stringify(productQuantity);

        cartContainer.innerHTML = /*`${productQuantity.map(() => {
            if(productQuantity[currentProduct.id] != 0 ) {
            return `
                <div class="cart__item">
                    <div class="cart__name">${currentProduct.name}</div>
                </div>
            `;
        }
        }).join('')}`;*/

        `${Object.entries(productQuantity).map(item => {
            
                return `
                <div class="cartItem">
                    ${item}
                </div>
                `
            
            
            
        }).join('')}
        `;


        


         
    }

})