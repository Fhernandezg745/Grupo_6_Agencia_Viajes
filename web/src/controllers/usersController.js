const {
    user,
    images,
    resetTokens
} = require("../database/models/index");
require('dotenv').config();
const { hashSync } = require('bcryptjs');
const nodemailer = require("nodemailer");
const transport = require("../email/transport")
const { validationResult } = require("express-validator");
const crypto = require('crypto');
const { Op } = require("sequelize");
const Sequelize = require("sequelize");

const usersController = {
    register: async(req, res) => {
        return res.render("users/register", {
            title: "Register",
        });
    },
    process: async(req, res) => {
        let validaciones = validationResult(req)

        let { errors } = validaciones
        if (errors && errors.length > 0) {
            return res.render('users/register', {
                styles: ['forms'],
                oldData: req.body,
                errors: validaciones.mapped()
            });
        }
        req.body.password = hashSync(String(req.body.password), 10);
        req.body.isAdmin = String(req.body.email).toLocaleLowerCase().includes('@ht');

        if (req.files && req.files.length > 0) {
            let avatar = await images.create({
                images: req.files[0].filename
            })

            req.body.avatar = avatar.id;
        }
        await user.create(req.body);
        return res.redirect("./login")
    },
    login: async(req, res) => {
        return res.render('users/login', {
            styles: ['forms']
        });
    },
    access: async(req, res) => {
        let validaciones = validationResult(req)
        let { errors } = validaciones
        if (errors && errors.length > 0) {
            return res.render('users/login', {
                styles: ['forms'],
                oldData: req.body,
                errors: validaciones.mapped()
            });
        }
        let users = await user.findAll();

        let userDB = users.find(u => u.email === req.body.email)
        req.session.user = userDB
        return res.redirect('/users/logged')
    },
    logout: function(req, res) {
        delete req.session.user
        return res.redirect('/')
    },
    logged: function(req, res) {
        return res.render('users/logged', {
            title: "Mi cuenta",
        });
    },
    forgotPass: function(req,res){
        res.render('users/forgotPass',{ });
    },
    forgotPassMessage: function(req,res){
        res.render('users/forgotPassMEssage',{ });
    },
    changePass: async (req,res) => {
        let email = await user.findOne({where:{email:req.body.email}});
        if (email == null) {
            return res.redirect("/users/forgotPassMessage")
        }
        await resetTokens.update({
            used:1
        },
        {
            where: {
                email: req.body.email
            }
        });
        //creo un token random
        let fpSalt = crypto.randomBytes(32).toString('hex');
        //token expira en 1 hr
        let expireDate = new Date(new Date().getTime() + (60*60*1000))
        //paso el token a la DB
        await resetTokens.create({
            email: req.body.email,
            expiration: expireDate,
            token: fpSalt,
            used:0
        })
        //mensaje del email de recuperacion
        const message = {
            from: "harbortripconfirmation@gmail.com", // sender address
            to: req.body.email, // list of receivers
            replyTo: "harbortripconfirmation@gmail.com",
            subject: " Recupero de Contraseña Harbor Trip - No contestar este correo", // Subject line
            text: "¿Olvidaste tu contraseña?\n\n Para reestablecer su contraseña, por favor haga click en el siguiente enlace.\n\nhttp://"+process.env.DOMAIN+'/users/resetPassword?token='+encodeURIComponent(fpSalt)+'&email='+req.body.email+"\n\n Token de confirmacion: "+fpSalt // plain text body 
        }
        //mando el email
        await transport.sendMail(message,function(err,info){
            if(err){console.log(err)}
            else{ console.log(info)}
        });
        return res.redirect("/users/forgotPassMessage")
    },
    resetPass: async (req, res, next) => {
        await resetTokens.destroy({
            where: {
              expiration: { [Op.lt]: Sequelize.fn('CURDATE')},
            }
        });
        //busco el token de confirmacion
        let record = await resetTokens.findOne({
            where: {
            email: req.query.email,
            expiration: { [Op.gt]: Sequelize.fn('CURDATE')},
            token: req.query.token,
            used: 0
            }
        });
        // si el token expiro envio el mensaje
        if (record == null) {
            return res.render('users/resetPassword', {
              message: 'El Token ha expirado. Por favor, prueba solicitando uno nuevo.',
              showForm: false
            });
        }
        res.render('users/resetPassword', {
            showForm: true,
            record: record
        });
    },
    newPass: async (req, res, next) => {
        //comparo passwords
        if (req.body.password1 !== req.body.password2) {
            return res.redirect("/users/errorPassRecover");
        }
        let record = await resetTokens.findOne({
            where: {
              email: req.body.email,
              expiration: { [Op.gt]: Sequelize.fn('CURDATE')},
              token: req.body.token,
              used: 0
            }
          });
        if (record == null) {
            return res.redirect("/users/errorPassRecover");
        }
        let upd = await resetTokens.update({
            used: 1
          },
          {
            where: {
              email: req.body.email
            }
        });
        let newPassword = hashSync(String(req.body.password1), 10);
        const usuario = await user.update({
          password: newPassword,
        },
        {
          where: {
            email: req.body.email
          }
        });
        
        return res.redirect("/users/succesPassRecover");
    },
    succesPassRecover:function(req,res){
        res.render('users/succesPassRecover',{ });
    },
    errorPassRecover:function(req,res){
        res.render('users/errorPassRecover',{ });
    },
};

module.exports = usersController;