const { getConnection } = require("../config/db");

exports.create_customer = ({ email, name, id, address, phone }) =>
  new Promise((resolve, reject) =>
    getConnection(async (err, connection) => {
      if (err) reject(err);
      connection.query(
        `INSERT INTO users (email, name, id, address, phone) VALUES (?, ?, ?, ?, ?)`,
        [email, name, id, address, phone],
        (error, response) => {
          connection.release();
          if (error) reject(error);
          resolve(response);
        }
      );
    })
  );

exports.get_user_by_email = (email) =>
  new Promise((resolve, reject) =>
    getConnection(async (err, connection) => {
      if (err) reject(err);
      connection.query(
        `SELECT * FROM users WHERE email = ?`,
        [email],
        async (error, userData) => {
          connection.release();
          if (error) reject(error);
          let user = Object.assign({}, userData[0]);
          resolve(user);
        }
      );
    })
  );
