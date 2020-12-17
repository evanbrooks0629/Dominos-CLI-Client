const config = require("./config");

const list_products = () => {
    console.log("\n Welcome, " + config.first + "!");
    console.log(" Here is today's menu:\n");
    console.log(" ============================================================== ");
    console.log("|                     Products                    |    Code    |");
    console.log("|=================================================|============|");
    console.log("| Pizzas                                          |            |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| 10in Regular Pizza                              |     1      |");
    console.log("| 12in Regular Pizza                              |     2      |");
    console.log("| 14in Regular Pizza                              |     3      |");
    console.log("| 14in Cheeseburger Pizza                         |     4      |");
    console.log("| 14in ExtravaganZZa Pizza                        |     5      |");
    console.log("| 14in MeatZZa Pizza                              |     6      |");
    console.log("| 14in Philly Cheesesteak Pizza                   |     7      |");
    console.log("| 14in Pacific Veggie Pizza                       |     8      |");
    console.log("| 14in Honolulu Hawaiian Pizza                    |     9      |");
    console.log("| 14in Deluxe Pizza                               |     10     |");
    console.log("| 14in Chicken Bacon Ranch Pizza                  |     11     |");
    console.log("| 14in Buffalo Chicken Pizza                      |     12     |");
    console.log("| 14in Ultimate Pepperoni Pizza                   |     13     |");
    console.log("| 14in Memphis BBQ Chicken Pizza                  |     14     |");
    console.log("| 14in Wisconsin 6 Cheese Pizza                   |     15     |");
    console.log("| 14in Spinach and Feta Pizza                     |     16     |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Chicken                                         |            |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Specialty Chicken - Crispy Bacon and Tomato     |     17     |");
    console.log("| Specialty Chicken - Classic Hot Buffalo         |     18     |");
    console.log("| Specialty Chicken - Spicy Jalapeno and Pineapple|     19     |");
    console.log("| Specialty Chicken - Sweet BBQ Bacon             |     20     |");
    console.log("| 8ct Hot Buffalo Wings                           |     21     |");
    console.log("| 10ct Hot Buffalo Wings                          |     22     |");
    console.log("| 16ct Hot Buffalo Wings                          |     23     |");
    console.log("| 32ct Hot Buffalo Wings                          |     24     |");
    console.log("| 8ct Honey BBQ Wings                             |     25     |");
    console.log("| 10ct Honey BBQ Wings                            |     26     |");
    console.log("| 16ct Honey BBQ Wings                            |     27     |");
    console.log("| 32ct Honey BBQ Wings                            |     28     |");
    console.log("| 8ct Mild Buffalo Wings                          |     29     |");
    console.log("| 10ct Mild Buffalo Wings                         |     30     |");
    console.log("| 16ct Mild Buffalo Wings                         |     31     |");
    console.log("| 32ct Mild Buffalo Wings                         |     32     |");
    console.log("| 8ct Plain Wings                                 |     33     |");
    console.log("| 10ct Plain Wings                                |     34     |");
    console.log("| 16ct Plain Wings                                |     35     |");
    console.log("| 32ct Plain Wings                                |     36     |");
    console.log("| 8ct Sweet Mango Habanero Wings                  |     37     |");
    console.log("| 10ct Sweet Mango Habanero Wings                 |     38     |");
    console.log("| 16ct Sweet Mango Habanero Wings                 |     39     |");
    console.log("| 32ct Sweet Mango Habanero Wings                 |     40     |");
    console.log("| 8ct Garlic Parmesan Wings                       |     41     |");
    console.log("| 10ct Garlic Parmesan Wings                      |     42     |");
    console.log("| 16ct Garlic Parmesan Wings                      |     43     |");
    console.log("| 32ct Garlic Parmesan Wings                      |     44     |");
    console.log("| 8ct Boneless Chicken Wings                      |     45     |");
    console.log("| 10ct Boneless Chicken Wings                     |     46     |");
    console.log("| 16ct Boneless Chicken Wings                     |     47     |");
    console.log("| 32ct Boneless Chicken Wings                     |     48     |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Breads                                          |            |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Parmesan Bread Twists                           |     49     |");
    console.log("| Garlic Bread Twists                             |     50     |");
    console.log("| Stuffed Cheesy Bread                            |     51     |");
    console.log("| Stuffed Cheesy Bread with Spinach and Feta      |     52     |");
    console.log("| Stuffed Cheesy Bready with Bacon and Jalapeno   |     53     |");
    console.log("| 16ct Parmesan Bread Bites                       |     54     |");
    console.log("| 32ct Parmesan Bread Bites                       |     55     |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Pastas                                          |            |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Chicken Alfredo                                 |     56     |");
    console.log("| Italian Sausage                                 |     57     |");
    console.log("| Chicken Carbonara                               |     58     |");
    console.log("| Pasta Primavera                                 |     59     |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Sandwiches                                      |            |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Buffalo Chicken                                 |     60     |");
    console.log("| Chicken Habanero                                |     61     |");
    console.log("| Meditteranean Veggie                            |     62     |");
    console.log("| Philly Cheese Steak                             |     63     |");
    console.log("| Chicken Bacon Ranch                             |     64     |");
    console.log("| Italian                                         |     65     |");
    console.log("| Chicken Parm                                    |     66     |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Desserts                                        |            |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Cookie Brownie                                  |     67     |");
    console.log("| 2ct Chocolate Lava Crunch Cakes                 |     68     |");
    console.log("| Cinnamon Bread Twists                           |     69     |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| Beverages                                       |            |");
    console.log("|-------------------------------------------------|------------|");
    console.log("| 20oz Coke                                       |     70     |");
    console.log("| 2 Litre Coke                                    |     71     |");
    console.log("| 2 Litre Coke Zero                               |     72     |");
    console.log("| 20oz Diet Coke                                  |     73     |");
    console.log("| 2 Litre Diet Coke                               |     74     |");
    console.log("| 20oz Sprite                                     |     75     |");
    console.log("| 2 Litre Sprite                                  |     76     |");
    console.log("| 20oz Dasani                                     |     77     |");
    console.log("| 20oz Orange Fanta                               |     79     |");
    console.log("| 2 Litre Orange Fanta                            |     79     |");
    console.log("| 2 Litre Pineapple Fanta                         |     80     |");
    console.log("| 20oz FUZE Iced Tea Lemon                        |     81     |");
    console.log(" ============================================================== \n");
    console.log(" When you're ready, run this command:");
    console.log(" >> npx run-func app.js run [product code1, product code2, etc]\n");
    console.log(" Bon Apetite!");
}

module.exports = list_products;