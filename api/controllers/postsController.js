'use strict';
var postsModel = require('../models/postsModel');
var posts = {};


// Create a new POST by title, body, userId
posts.createPost = function(req, res){

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
    };
    postsModel.createPost(data, function(response){
        res.status(200).json({
            message: "Post successfully has been created.",
            data:  JSON.stringify(response)
        });
        return false;
    })
};


// Get one POST by ID
posts.post = function(req, res){
    postsModel.getByID(req.params.id, function(response){
        res.status(200).json(response);
    })
};

// Update any POST by ID
posts.updatePost = function(req, res){
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
};

// Delete POST by ID
posts.deletePost = function(req, res){
    postsModel.delete(req.params.id, function(response){
        res.status(200).json(response);
    })
};

module.exports = posts;