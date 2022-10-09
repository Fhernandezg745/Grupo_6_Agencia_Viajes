
const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
auth: {
    user: "harbortripconfirmation@gmail.com", // generated ethereal user
    pass: "jpcfxldoynauiiqy", // generated ethereal password
},
});

module.exports = transport