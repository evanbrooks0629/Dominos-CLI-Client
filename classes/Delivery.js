const axios = require("axios");
const util = require('util')
const order_json = require("../data/Order");
const price_json = require("../data/Price");

class Delivery {
    constructor(user) {
        this.user = user;
    }
    
    submit_order = async () => {
        const url = this.user.get_address(); // get address url
        const user_order = this.user.get_products(); // get formatted user order

        const request_user_data = await axios.get(url); // get the response from the url with the user's address
    
        const store_id = request_user_data.data.Stores[0].StoreID; // get the store id of the closest store
        const user_address = request_user_data.data.Address; // get the newly formatted address
    
        price_json.Order.Address = user_address; // set address in json file to get total cost
        price_json.Order.Products = user_order; // set products in json file to get total cost
        price_json.Order.StoreID = store_id; // set store id in json file to get total cost
    
        // make a post request with the products to find out total cost
        const price_order = await axios.post("https://order.dominos.com/power/price-order", price_json);
        const total_price = price_order.data.Order.Amounts.Payment; // collect total cost
        const user_payments = this.user.get_payments(total_price); // get formatted user's products
    
        order_json.Order.Email = this.user.email; // set email in final post request to place order
        order_json.Order.FirstName = this.user.first; // set first name in final post request to place order
        order_json.Order.LastName = this.user.last; // set last name in final post request to place order
        order_json.Order.Phone = this.user.phone; // set phone number in final post request to place order (used to track order)
        order_json.Order.StoreID = store_id; // set store id in final post request to place order
        order_json.Order.Address = user_address; // set formatted address in final post request to place order
        order_json.Order.Payments = user_payments; // set formatted payments in final post request to place order
        order_json.Order.Products = user_order; // set formatted products in final post request to place order
    
        const post_order = await axios.post('https://order.dominos.com/power/place-order', order_json); // place order
        // console.log(util.inspect(post_order.data, false, null, true));
        
        const status = post_order.data.Status; // get status from order (either success or failure)
        const final_price = (Number(user_payments[0].Amount) + Number(user_payments[0].TipAmount)); // get the sum of the total cost and the added tip
    
        if (status == 1) {
            // success
            console.log("Your order has been placed!");
            console.log("Total price: $" + final_price);
            console.log("\nYou just received an email from Dominos pertaining to your order.");
            console.log("Check the email to see the status of your delivery.");
            console.log("\n Enjoy!");
        } else {
            // failure
            console.log("There was an error placing your order.");
        }
    }
}

module.exports = Delivery;