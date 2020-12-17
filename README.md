# Dominos CLI Client

# Set up
First, clone this project onto your computer. CD into the directory and type `npm install` to install the packages.
Then, type in 
`npm install --save -g run-func`
The purpose of this package is to allow for you to do everything from the command line.

Once your environment is set up, you will want to go into the `config.json` file in the `data` subdirectory and enter your information. Make sure to enter your credit card's expiration data as one value; for example, if the expiration date is 01/23, type it as 0123. 

After that, you're ready to go. To place an order, navigate to the project directory and open your command line. 
To see all available products and their codes, type in 
`npx fun-func app.js list_products`
It will show a table with all the products and their corresponding codes.

Once you know what products you want (for example, products 1, 5, and 46), then type in 
`npx run-func app.js run [1,5,46]`
The last part of the above line is an array with the products you want. Once you hit enter, you will either see a success message or an error message.

If the order went through, you can go to [here](https://www.dominos.com/en/pages/tracker/#!/track/order/) to track your order. Use the phone number in the config.json file to track it.

If you enjoyed this, feel free to add to it and expand upon it. 
