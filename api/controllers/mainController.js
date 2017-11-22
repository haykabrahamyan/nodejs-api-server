'use strict';
var postsModel = require('../models/postsModel');
var usersModel = require('../models/usersModel');
var albumsModel = require('../models/albumsModel');



exports.createPost = function(req, res){

    if (req.body.title === undefined || req.body.title == '' || req.body.body === undefined || req.body.body == '' || req.body.userId === undefined || req.body.userId == '') {
        res.status(400).json({
            message: "Validation Failed! All fields are required('title', 'body', 'userId')."
        });
        return false;
    }
    var data = {
        title: req.body.title,
        body: req.body.body,
        userId: parseInt(req.body.userId)
    }
    postsModel.createPost(data, function(response){
        res.status(200).json({
            message: "Post successfully has been crreated.",
            data:  JSON.stringify(response)
        });
        return false;
    })
}

exports.post = function(req, res){
    postsModel.getByID(req.params.id, function(response){
        res.status(200).json(response);
    })
}
exports.updatePost = function(req, res){
    var data = {};
    if (req.body.title !== undefined && req.body.title != ''){
        data.title = req.body.title;
    }
    if (req.body.body !== undefined && req.body.body != ''){
        data.body = req.body.body;
    }
    if (req.body.userId !== undefined && req.body.userId != ''){
        data.userId = req.body.userId;
    }
    postsModel.updatePost(req.params.id, data, function(response){
        res.status(200).json(response);
    })
}
exports.deletePost = function(req, res){
    postsModel.delete(req.params.id, function(response){
        res.status(200).json(response);
    })
}

exports.user = function(req, res){
    usersModel.getByID(req.params.id, function(response){
        res.status(200).json(response);
    })
}
exports.updateUser = function(req, res){
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
}
exports.deleteUser = function(req, res){
    usersModel.delete(req.params.id, function(response){
        res.status(200).json(response);
    })
}

exports.album = function(req, res){
    albumsModel.getByID(req.params.id, function(response){
        res.status(200).json(response);
    })
}
exports.updateAlbum = function(req, res){
    var data = {};
    if (req.body.title !== undefined && req.body.title != ''){
        data.title = req.body.title;
    }
    if (req.body.userId !== undefined && req.body.userId != ''){
        data.userId = req.body.userId;
    }
    albumsModel.updateAlbum(req.params.id, data, function(response){
        res.status(200).json(response);
    })
}
exports.deleteAlbum = function(req, res){
    albumsModel.delete(req.params.id, function(response){
        res.status(200).json(response);
    })
}

exports.createUser = function(req, res){
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
    }
    usersModel.createUser(data, function(response){
        res.status(200).json({
            message: "User successfully has been crreated.",
            data:  JSON.stringify(response)
        });
        return false;
    })
}

exports.createAlbum = function(req, res){
    if (req.body.title === undefined || req.body.title == '' || req.body.userId === undefined || req.body.userId == '') {
        res.status(400).json({
            message: "Validation Failed! All fields are required('title', 'userId')."
        });
        return false;
    }
    var data = {
        title: req.body.title,
        userId: parseInt(req.body.userId)
    }
    albumsModel.createAlbum(data, function(response){
        res.status(200).json({
            message: "Album successfully has been crreated.",
            data:  JSON.stringify(response)
        });
        return false;
    })
}

exports.collection = function(req, res){
    var collection = {};
    postsModel.posts(function(response){
        collection.post = response;
        albumsModel.albums(function(response){
            collection.album = response;
            usersModel.users(function(response){
                collection.user = response;
                res.status(200).json(collection);
                return false;
            })
        })
    })
}