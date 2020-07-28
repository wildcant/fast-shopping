const { getConnection } = require("../config/db");

exports.create_order = (order_data) =>
  new Promise((resolve, reject) =>
    getConnection((err, connection) => {
      if (err) reject(err);
      connection.query(
        `INSERT INTO orders ( id_order, id_user, total_price) VALUES  (?, ?, ?);`,
        order_data,
        (error, response) => {
          connection.release();
          if (error) reject(error);
          resolve(response);
        }
      );
    })
  );

exports.create_order_item = (order_item) =>
  new Promise((resolve, reject) =>
    getConnection((err, connection) => {
      if (err) reject(err);
      connection.query(
        `INSERT INTO order_items ( id_order, id_user, id_product, quantity) VALUES (?, ?, ?, ?)`,
        order_item,
        (error, response) => {
          connection.release();
          if (error) reject(error);
          resolve(response);
        }
      );
    })
  );
