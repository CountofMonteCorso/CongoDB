var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "congodb"
});
var resArray = [];

connection.connect(function(err) {
 	if (!err) {
 		console.log("ur connected af");
 		console.log("shop til you drop yallllll");
 		console.log("here's the good good:")
 		function displayInventory() {
  			connection.query("SELECT * FROM products", function(err, res) {
   				if (err) throw err;
   				// console.log(res);
    				for (var i = 0; i < res.length; i++) {
    				var innerArr = [];
    				innerArr.push(res[i].item_id)
    				innerArr.push(res[i].product_name);
    				innerArr.push(res[i].department_name);
    				innerArr.push(res[i].price);
    				if (res[i].stock_quantity > 0){
    					innerArr.push("In stock");
    				}
    				else {
    				innerArr.push("nah bro, we're out.");
    				};
    				resArray.push(innerArr);
    				}
  				
  				console.table(["Item ID", "Product Name", "Department", "Price", "Stock"], resArray);
  			});	
		}
		
		displayInventory();	
	}
 		function initPurchase(){ 
	 			inquirer.prompt ([
				{ 
				type: "input", 
				name: "query",
	            message: "whatchu wanna buy? (enter the item ID)\n",
	            },
	            {
	            type: "input",
	            name: "qtyquery",
	            message: "ok but how many tho\n"
	            }
				]).then(function(userInput) {
							connection.query(
								"UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", 
								[userInput.qtyquery, userInput.query], function(err, res){
									// if (stock_quantity > 0){
										console.log("here's ur stuff k bye");
									// }
									// else {
									// 	console.log("sry. we're out dude.")
									// }
								});									
				});
		}
		initPurchase();
		connection.end();
});

