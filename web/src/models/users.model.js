const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

module.exports = {
  index: function () {
    let file = resolve(__dirname, "../data", "users.json");
    let data = readFileSync(file, "utf8");
    return JSON.parse(data);
  },
  one: function (id) {
    let file = resolve(__dirname, "../data", "users.json");
    let data = readFileSync(file, "utf8");
    let products = JSON.parse(data);
    return products.find((user) => user.userId === id);
  },
  create: function (data) {
    let file = resolve(__dirname, "../data", "users.json");
    let info = readFileSync(file, "utf8");
    let users = JSON.parse(info);
    let lastUser = users[users.length - 1];
    return Object({
      userId: users.length == 0 ? 1 : lastUser.userId + 1,
      fullName: data.fullName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country,
      address: data.addres,
      gender: data.gender,
      date: data.date,
      position: data.position,
      image: data.image,
    });
  },
  write: function (data) {
    let file = resolve(__dirname, "../data", "users.json");
    let info = JSON.stringify(data, null, 2);
    writeFileSync(file, info);
  },
};