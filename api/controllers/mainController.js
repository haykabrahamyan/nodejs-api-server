'use strict';
var postsModel = require('../models/postsModel');
var usersModel = require('../models/usersModel');
var albumsModel = require('../models/albumsModel');



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
};