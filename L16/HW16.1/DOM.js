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
            id: "id-2",
            name: 'Title 3',
            price: '300',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        }
    ];
    let totalCost = 0;
    
    const productsContainer =  document.querySelector('.products');

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

    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonAddClick)
    })

    function onButtonAddClick(event) {
        const productId = event.target.dataset.productId;
        const currentProduct = products.find(item => item.id == productId);

        totalCost += Number(currentProduct.price);
        totalContainer.innerHTML = totalCost;
    }

    console.log(buttons);
})