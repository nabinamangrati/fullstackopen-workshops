require("dotenv").config();

module.exports = {
  DB_CONNECTION: process.env.DATABASE_URL,
  PORT: 3001,
};
