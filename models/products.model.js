const { getConnection } = require("../config/db");

exports.products_get_chunk = (startIndex, orderParam, direction) =>
  new Promise((resolve, reject) =>
    getConnection((err, connection) => {
      if (err) reject(err);
      let response = {};
      connection.query("SELECT COUNT(*) FROM products", (error, pages) => {
        if (error) reject(error);
        let querySrt = "SELECT * FROM products";
        querySrt += orderParam ? ` ORDER BY ${orderParam}` : "";
        querySrt += direction ? ` ${direction}` : "";
        querySrt += ` LIMIT ${startIndex},20`;
        // `SELECT * FROM products ORDER BY ${orderParam} ${direction} LIMIT ${startIndex},20`
        connection.query(querySrt, (error, products) => {
          if (error) reject(error);
          connection.release();
          response.products = products;
          response.numberOfPages = pages[0]["COUNT(*)"] / 20;
          resolve(response);
        });
      });
    })
  );
