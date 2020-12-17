class Card {
    constructor(number, exp, cvv) {
        this.number = number;
        this.exp = exp;
        this.cvv = cvv;
        this.type = "";
        this.rgxVISA = RegExp('^4[0-9]{6,}$');
        this.rgxMSCD = RegExp('^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$');
        this.rgxAMEX = RegExp('^3[47][0-9]{5,}$');
        this.rgxDSCV = RegExp('^6(?:011|5[0-9]{2})[0-9]{3,}$');
    }

    get_type() {
        // uses RegEx to see type of credit card
        if (this.rgxVISA.test(this.number)) {
            this.type = "VISA";
        } else if (this.rgxMSCD.test(this.number)) {
            this.type = "MASTERCARD";
        } else if (this.rgxAMEX.test(this.number)) {
            this.type = "AMEX";
        } else if (this.rgxDSCV.test(this.number)) {
            this.type = "DISCOVER";
        } 
    }
}

module.exports = Card;