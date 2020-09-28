// 1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
// 2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.
// 3* Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, а render() вызывался в обработчике этого промиса.





class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.productsInBasket = [];
        this._fetchProducts()
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    renderProductList() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //this.allProducts.push(productObj);
            block.innerHTML += productObj.renderProductItem();
        }
    }

    sumItemProduct() {
        let result = this.productsInBasket.reduce((sum, item) => sum += sum + item.price, 0);
        console.log(result);
    }
}



class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
    }

    renderProductItem() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <p>${this.price} у.е.</p>
                <button class="remove" id='${this.id}'>Добавить</button>
                <button class='add' id='${this.id * 100}'>Убрать</button>
                </div>`
    }
}

class BasketList {
    constructor(containerBasket = '.btn-cart') {
        this.containerBasket = containerBasket;
        this.productsInBasket = [];
    }

    renderBasketList() {
        const block = document.querySelector(this.containerBasket);
        for (let product1 of this.containerBasket) {
            const BasketObj = new BasketItem(product1);
            block.innerHTML += BasketObj.renderBasketList();
        }
    }
}

class BasketItem {
    constructor(product1) {
        return `<div class='basket'>
            <p> ${this.price}</p>
        </div>`
    }
}


let list = new ProductsList();
list.renderProductList()


