class Product {
    static _id = 0;
    id;
    name = "";
    description = "";
    sizes = [];
    price = 0;
    available = false;

    constructor(name, description, sizes, price, available) {
        this.id = Product._id++;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
}


const catalog = [
    new Product("name1", "description1", [1, 2, 3], 100, true),
    new Product("name1", "description1", [1, 2, 3], 200, true),
    new Product("name1", "description1", [1, 2, 3], 300, false),
    new Product("name1", "description1", [1, 2, 3], 400, true),
    new Product("name1", "description1", [1, 2, 3], 500, false)
];


class ProductInBasket {
    good;
    amount;

    constructor(product, amount) {
        this.good = product;
        this.amount = amount;
    }

}

class Basket {
    products = [];

    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        if (product.good.available)
            this.products.push(product)
    }

    removeProduct(removedProduct) {
        const idx = this.products.findIndex((product) => product === removedProduct || product.good.id === removedProduct.good.id);
        if (idx !== -1) this.products.splice(idx, 1);
    }

    clear() {
        this.products = [];
    }

    getTotalAmountAndTotalPrice() {
        const totalAmount = this.products.reduce((prev, current) => prev + current.amount, 0);


        let totalSum = 0;
        this.products.forEach((product) => {
            totalSum += product.amount * product.good.price;
        })

        return {
            totalAmount,
            totalSum,
        }
    }
}

const basket = new Basket([
    new ProductInBasket(catalog[0], 5),
    new ProductInBasket(catalog[1], 5),
]);


basket.clear();


const product2 = new ProductInBasket(catalog[2], 1);

basket.addProduct(new ProductInBasket(catalog[0], 5));
basket.addProduct(new ProductInBasket(catalog[1], 5));


basket.addProduct(product2);

basket.removeProduct(product2);

console.log(basket.getTotalAmountAndTotalPrice());
