class User {
    constructor(first, last, email, address, phone, card, order) {
        this.first = first;
        this.last = last;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.card = card;
        this.order = order;
    }

    get_address() {
        // turn address into the proper url
        let address_array = [this.address.city + "%2C", this.address.state, this.address.zip];
        const address_city = "&c=" + address_array.join("%20");
        const address_street = "&s=" + this.address.street.split(" ").join("%20");
        const address_url = "https://order.dominos.com/power/store-locator?type=Delivery" + address_city + address_street;
        return address_url;
    }

    get_products() {
        // turns user's order into json formatted for the request
        let user_order = [];
        for (let i = 0; i < this.order.length; i++) {
            user_order.push({
                "Code": this.order[i].code,
                "Qty": this.order[i].quantity,
                "ID": i+1,
                "isNew": true,
                "ShowBestPriceMessage": false,
                "Options": { 'C': {'1/1': '1'}, 'X': {'1/1': '1'} }
            });
        }
        return user_order;
    }

    get_payments(price) {
        // turns user's credit card information and price of the order into json formatted for the request
        return [
            {
                "Type": "CreditCard",
                "Amount": price,
                "Number": this.card.number,
                "CardType": this.card.type,
                "Expiration": this.card.exp,
                "SecurityCode": this.card.cvv,
                "PostalCode": this.address.zip,
                "ProviderID": "",
                "PaymentMethodID": "",
                "OTP": "",
                "gpmPaymentType": "",
                "TipAmount": (price * .1).toFixed(2),
                "Token": "",
                "TokenType": "ACI"
            }
        ]
    }
}

module.exports = User;