<div align="center">
  <h1>Fast Shopping</h1>

<a href="#">
  <img
    height="80"
    width="80"
    alt="logo"
    src="https://raw.githubusercontent.com/CwirL/fast-shopping/master/public/er-diagram.png"
  />
</a>

<p>Sancrisoft test, small app which allows any user to make a purchase in a few steps.</p>
</div>

<hr />

![GitHub repo size](https://img.shields.io/github/repo-size/cwirl/fast-shopping?style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/cwirl/fast-shopping?style=plastic)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of node js.
* You have installed the latest version of yarn.
* You have installed MySQL data base.

In order to to create the data base you can use the [model](https://github.com/CwirL/fast-shopping/blob/master/db/fast_shopping_app.mwb) which you can forward  or use the [SQL script](https://github.com/CwirL/fast-shopping/blob/master/db/database.sql). There is also some test data to fill the products table at [products_data.sql](https://github.com/CwirL/fast-shopping/blob/master/db/products_data.sql), fill free to use it.

![DB ER Diagram](https://github.com/CwirL/fast-shopping/blob/master/public/er-diagram.png?raw=true "ER Diagram"]

## Installing Fast Shopping

To install Fast Shopping, follow these steps:

```sh 
git clone https://github.com/CwirL/fast-shopping.git
cd fast-shopping && yarn
cd client && yarn
```

## Using Fast Shopping

To use  Fast Shopping, follow these steps:

Development: 
```sh 
cd fast-shopping && yarn dev
```

Production:
```sh 
cd fast-shopping/client && yarn build
cd .. && yarn start
```


## Contributors

* [@cwirl](https://github.com/cwirl) 📖

## Contact

If you want to contact me you can reach me at <will.canti2697@gmail.com>.