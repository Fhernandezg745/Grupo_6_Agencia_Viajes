require('dotenv').config()
const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.USER_NAME, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
    },
});

module.exports = transport