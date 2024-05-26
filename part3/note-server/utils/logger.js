const { model } = require("mongoose");

const info = (...params) => {
  console.log(...params);
};
module.exports = { info };
