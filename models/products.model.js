const { getConnection } = require("../config/db");

exports.products_get_chunk = (
  orderParam = "date",
  direction = "ASC",
  startIndex = 0
) =>
  new Promise((resolve, reject) =>
    getConnection((err, connection) => {
      if (err) reject(err);
      let response = {};
      connection.query("SELECT COUNT(*) FROM products", (error, pages) => {
        if (error) reject(error);
        connection.query(
          `SELECT * FROM products ORDER BY ${orderParam} ${direction} LIMIT ${startIndex},10`,
          (error, products) => {
            if (error) reject(error);
            connection.release();
            response.products = products;
            response.numberOfPages = pages[0]["COUNT(*)"] / 10;
            resolve(response);
          }
        );
      });
    })
  );
