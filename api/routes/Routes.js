'use strict';
module.exports = function(app) {
    var main = require('../controllers/mainController');
    var posts = require('../controllers/postsController');
    var albums = require('../controllers/albumsController');
    var users = require('../controllers/usersController');
    var API_VERSION = '/api/v1';



    // API Routes for posts
    app.get(API_VERSION + '/posts/:id',IsAuthenticated, posts.post);
    app.post(API_VERSION + '/posts',IsAuthenticated, posts.createPost);
    app.delete(API_VERSION + '/posts/:id',IsAuthenticated, posts.deletePost);
    app.patch(API_VERSION + '/posts/:id',IsAuthenticated, posts.updatePost);

    // API Routes for users
    app.get(API_VERSION + '/users/:id',IsAuthenticated, users.user);
    app.post(API_VERSION + '/users',IsAuthenticated, users.createUser);
    app.delete(API_VERSION + '/users/:id',IsAuthenticated, users.deleteUser);
    app.patch(API_VERSION + '/users/:id',IsAuthenticated, users.updateUser);

    // API Routes for albums
    app.get(API_VERSION + '/albums/:id',IsAuthenticated, albums.album);
    app.post(API_VERSION + '/albums',IsAuthenticated, albums.createAlbum);
    app.delete(API_VERSION + '/albums/:id',IsAuthenticated, albums.deleteAlbum);
    app.patch(API_VERSION + '/albums/:id',IsAuthenticated, albums.updateAlbum);

    app.get(API_VERSION + '/collection',IsAuthenticated, main.collection);

};


function IsAuthenticated(req,res,next){

    var token = req.get('Authorization');

    if(token !== undefined && token == 'Bearer test123456'){
        next();
    }else{
        next(new Error(503));
    }
}