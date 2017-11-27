'use strict';
var albumsModel = require('../models/albumsModel');
var albums = {};

// Get ALBUM by ID
albums.album = function(req, res){
    albumsModel.getByID(req.params.id, function(response){
        res.status(200).json(response);
    })
};

// Update ALBUM by ID
albums.updateAlbum = function(req, res){
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
};

// Delete ALBUM by ID
albums.deleteAlbum = function(req, res){
    albumsModel.delete(req.params.id, function(response){
        res.status(200).json(response);
    })
};

// Create ALBUM by title, userId
albums.createAlbum = function(req, res){
    if (req.body.title === undefined || req.body.title == '' || req.body.userId === undefined || req.body.userId == '') {
        res.status(400).json({
            message: "Validation Failed! All fields are required('title', 'userId')."
        });
        return false;
    }
    var data = {
        title: req.body.title,
        userId: parseInt(req.body.userId)
    };
    albumsModel.createAlbum(data, function(response){
        res.status(200).json({
            message: "Album successfully has been crreated.",
            data:  JSON.stringify(response)
        });
        return false;
    })
};

module.exports = albums;