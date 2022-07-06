const {storage} = require("../data/storage")
const { BadRequestError, NotFoundError } = require("../utils/errors")

// function getProduct(products, id) {
//     if (typeof id === "string") {
//         return products.find(p => p.id === parseInt(id, 10))
//     }
//     return products.find(p => p.id === id)

// }


class Store {
    constructor() {
        this.super();
    }
    static getTotal(cart, products, tax) {
        let total = 0;
        cart.forEach(item => {
            total += products[item.itemId - 1].price * (item.quantity)
        })
        return (total*tax).toFixed(2)
    }

    static createReceipt(data) {
        let receipt = []
        receipt.push(`Showing receipt for ${data.userInfo.name} with email: ${data.userInfo.email}:`)
        data.cart.forEach(item => {
            receipt.push(`Purchased ${item.quantity} of ${data.products[item.itemId -1].name} for $${(data.products[item.itemId -1].price*item.quantity).toFixed(2)}`)
        })
        receipt.push(`Subtotal: ${data.subtotal}.`)
        receipt.push(`With taxes and fees, the total was ${data.total}.`)
        return receipt

    }

    static listProducts() {
        return storage.get("products").value();
    }

    static getProduct(id) {
        const product = storage.get("products").find({id: Number(id)}).value();
        if (product) return product;
        throw new NotFoundError("No product found with that id.")
    }
    
    static createOrder(cart, userInfo) {
        if (!cart || !Object.keys(cart).length) {
            throw new BadRequestError("No items in cart to checkout.")
        }

        if (!userInfo || !Object.keys(userInfo).length) {
            throw new BadRequestError("No user info found to checkout with.")
        }
        
        const products = storage.get("products").value();
        const subtotal = "$" + Store.getTotal(cart, products, 1);
        const total = "$" + Store.getTotal(cart, products, 1.0875);

        const receipt = Store.createReceipt({
            cart, subtotal, total, products, userInfo
        });
        let purchases = storage.get("purchases").value();
        const purchase = {
            id: purchases.length,
            name: userInfo.name,
            email: userInfo.email,
            total,
            receipt
        };

        storage.get("purchases").push(purchase).write()
        return purchase;

    }
}

module.exports = Store