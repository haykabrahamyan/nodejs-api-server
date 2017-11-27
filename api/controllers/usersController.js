'use strict';
var usersModel = require('../models/usersModel');
var users = {};

// Get USER by ID
users.user = function(req, res){
    usersModel.getByID(req.params.id, function(response){
        res.status(200).json(response);
    })
};

// Update USER by ID
users.updateUser = function(req, res){
    var data = {};
    if (req.body.name !== undefined && req.body.name != ''){
        data.name = req.body.name;
    }
    if (req.body.username !== undefined && req.body.username != ''){
        data.username = req.body.username;
    }
    if (req.body.email !== undefined && req.body.email != ''){
        data.email = req.body.email;
    }
    usersModel.updateUser(req.params.id, data, function(response){
        res.status(200).json(response);
    })
};

// Delete USER by ID
users.deleteUser = function(req, res){
    usersModel.delete(req.params.id, function(response){
        res.status(200).json(response);
    })
};

// Create USER by name, username, email
users.createUser = function(req, res){
    if (req.body.name === undefined || req.body.name == '' || req.body.username === undefined || req.body.username == '' || req.body.email === undefined || req.body.email == '') {
        res.status(400).json({
            message: "Validation Failed! All fields are required('name', 'username', 'email')."
        });
        return false;
    }
    var data = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    };
    usersModel.createUser(data, function(response){
        res.status(200).json({
            message: "User successfully has been crreated.",
            data:  JSON.stringify(response)
        });
        return false;
    })
};

module.exports = users;