'use strict';
module.exports = function(app) {
    var main = require('../controllers/mainController');
    var API_VERSION = '/api/v1';



    // API Routes for posts
    app.get(API_VERSION + '/posts/:id',IsAuthenticated, main.post);
    app.post(API_VERSION + '/posts',IsAuthenticated, main.createPost);
    app.delete(API_VERSION + '/posts/:id',IsAuthenticated, main.deletePost);
    app.patch(API_VERSION + '/posts/:id',IsAuthenticated, main.updatePost);

    // API Routes for users
    app.get(API_VERSION + '/users/:id',IsAuthenticated, main.user);
    app.post(API_VERSION + '/users',IsAuthenticated, main.createUser);
    app.delete(API_VERSION + '/users/:id',IsAuthenticated, main.deleteUser);
    app.patch(API_VERSION + '/users/:id',IsAuthenticated, main.updateUser);

    // API Routes for albums
    app.get(API_VERSION + '/albums/:id',IsAuthenticated, main.album);
    app.post(API_VERSION + '/albums',IsAuthenticated, main.createAlbum);
    app.delete(API_VERSION + '/albums/:id',IsAuthenticated, main.deleteAlbum);
    app.patch(API_VERSION + '/albums/:id',IsAuthenticated, main.updateAlbum);

    app.get(API_VERSION + '/collection',IsAuthenticated, main.collection);

};


function IsAuthenticated(req,res,next){

    var token = req.get('Authorization');

    if(token !== undefined && token == 'Bearer af24353tdsfw'){
        next();
    }else{
        next(new Error(501));
    }
}