'use strict'

module.exports = function (app, express, passport) {
    
    var userCtrl = require('./user.controller');
    var jwToken = require('../../config/jwToken.js');
    var router = express.Router();
    // User Routes
   

    router.route(`/register`).post(userCtrl.signUp);
    router.route(`/login`).post(userCtrl.login);
    router.route(`/getAllUsers`).get(userCtrl.getAllUsers);
    router.route(`/`).get(function(req,res){
        res.render('index',{title:"API STARTED"});
    });

    app.use('/users', router);
};