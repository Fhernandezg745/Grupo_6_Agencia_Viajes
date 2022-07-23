const { static } = require("express");
const { resolve } = require("path");
const uploads = resolve(__dirname, "../../uploads");

module.exports = static(uploads);
