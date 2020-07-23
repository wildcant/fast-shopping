const mysql = require("mysql");
const {
  DB,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_CONNECTIONS,
} = require("./variables");

const pool = mysql.createPool({
  connectionLimit: DB_CONNECTIONS,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB,
});

module.exports = {
  getConnection: (callback) => {
    return pool.getConnection(callback);
  },
};
