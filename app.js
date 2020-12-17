const config = require("./config");
const products = require("./products");
const Address = require("./Address");
const Card = require("./Card");
const Item = require("./Item");
const User = require("./User");
const Delivery = require("./Delivery");
const list_products = require("./list_products");
// keeps list_products on a separate file for organization

// takes user input with products and user data from config and places an order
const run = (items) => {
    let cart = [];
    let prod = null;
    items = JSON.parse(items);

    for (item of items) {
        if (item == 0 || item > products.length) {
            // item numbers start at 1 and for now end at 81 
            // cancels if a product is invalid
            console.log("Error: Invalid item.");
            return;
        } else {
            // if items are valid, then create an Item instance for each product
            // add Item to cart
            item.toString();
            console.log(products[item]);
            prod = new Item(products[item], 1);
            cart.push(prod);
        }
    }

    // create an Address instance
    const address = new Address(config.address.street, config.address.city, config.address.state, config.address.zip);

    // create a Card instance
    const card = new Card(config.card.number, config.card.exp, config.card.cvv);
    card.get_type(); // Get the type of credit card

    // create a User instance
    const user = new User(config.first, config.last, config.email, address, config.phone, card, cart);

    // create a Delivery instance and place order
    const order = new Delivery(user);
    order.submit_order();
}

module.exports = { run, list_products };