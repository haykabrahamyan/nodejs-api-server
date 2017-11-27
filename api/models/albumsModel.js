'use strict';
var request = require('request');
var albumsModel = {};

// Set the headers
var headers = {
    'Content-Type':     'application/json; charset=UTF-8'
};
var options = {
    url: 'http://jsonplaceholder.typicode.com/albums',
    method: 'POST',
    headers: headers,
    form: {}
};

function doRequest(options, callback){
    request(options, function (error, response, body) {
        if (!error) {
            // Print out the response body
            callback(body);
        } else{
            callback({message: "We can't process right now as there is something went wrong."})
        }
    })
}


albumsModel.createAlbum = function(data, callback){
    var opt = JSON.parse(JSON.stringify(options));
    opt.form = data;
    doRequest(opt, callback);
};

albumsModel.albums = function(callback){
    var opt = JSON.parse(JSON.stringify(options));
    opt.method = 'GET';
    doRequest(opt, callback);
};

albumsModel.getByID = function(id, callback){
    var opt = JSON.parse(JSON.stringify(options));
    opt.method = 'GET';
    opt.url += '/' + id;
    doRequest(opt, callback);
};

albumsModel.delete = function(id, callback){
    var opt = JSON.parse(JSON.stringify(options));
    opt.method = 'DELETE';
    opt.url += '/' + id;
    doRequest(opt, callback);
};

albumsModel.updateAlbum = function(id, data, callback){
    var opt = JSON.parse(JSON.stringify(options));
    opt.method = 'PATCH';
    opt.url += '/' + id;
    opt.form = data;
    doRequest(opt, callback);
};

module.exports = albumsModel;