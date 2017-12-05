CREATE DATABASE congodb;

USE congodb;

CREATE TABLE products(
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(40),
    department_name VARCHAR(40), 
    price DECIMAL(6,2), -- 0000.00
    stock_quantity INTEGER,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
	("Blue Fuzzy Pants", "Clothing", "120.00", "4"),
    ("Marble Napkins", "Housewares", "90.00", "1200"),
    ("Balut", "Food", "1", "94"),
    ("Rattlesnakes", "Pets", "3000", "17"),
    ("Square Tires", "Automotive", "10.88", "36"),
    ("Expressive Dinosaur", "Pets", "9999", "14"),
    ("Pork Spheres", "Food", "6.99", "50"),
    ("Feather Necktie", "Clothing", "39.16", "70"),
    ("Rubber Windsheild", "Automotive", "700", "2"),
    ("", "", "", "")
    