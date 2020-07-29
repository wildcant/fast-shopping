<div align="center">
  <h1>Fast Shopping</h1>

<a href="https://fastshopping-will.herokuapp.com/">
  <img
    height="80"
    width="80"
    alt="logo"
    src="https://raw.githubusercontent.com/CwirL/fast-shopping/master/client/src/assets/images/logo.svg"
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
* You have installed MySQL database.

## Installing Fast Shopping

To install Fast Shopping, follow these steps:

```sh 
git clone https://github.com/CwirL/fast-shopping.git
cd fast-shopping && yarn
cd client && yarn
```

In order to create the database you can use the [model](https://github.com/CwirL/fast-shopping/blob/master/db/fast_shopping_app.mwb) which you can forward  or use the [SQL script](https://github.com/CwirL/fast-shopping/blob/master/db/database.sql). There is also some test data to fill the products table at [products_data.sql](https://github.com/CwirL/fast-shopping/blob/master/db/products_data.sql), feel free to use it.

MySQL ER Diagram
<img
  height="auto"
  width="100%"
  alt="ER Diagram"
  src="https://raw.githubusercontent.com/CwirL/fast-shopping/master/public/er-diagram.png"
/>


After creating the database make sure you add the .env file with your db credentials, based on [server .env-template](.env-template). eg:
### `.env`
```env
DB="fast_shopping"
DB_HOST="localhost"
DB_USER="will"
DB_PASSWORD="strong_password"
DB_CONNECTIONS=100
PORT= 8080
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

## Testing

For api testing I like to use vs code extension [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) after installing it you can use [test.rest](test.rest) file in order to test endpoints.

For react testing, make sure you create .env file in the client directory with the following variables:
### `client/.env`
```env
NODE_PATH=src/utils
EXTEND_ESLINT=true
```

 then run the following command:
```
cd fast-shopping/client && yarn test
```

## Contributors

* [@cwirl](https://github.com/cwirl) 📖

## Contact

If you want to contact me you can reach me at <will.canti2697@gmail.com>.
