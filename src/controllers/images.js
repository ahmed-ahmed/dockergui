'use strict';
console.log('images controller started');

var docker = require('./../services/docker.js');

exports.index = (request, response) => {
    docker.getImages().then(images => {
        var data = JSON.stringify(images);
        response.write(data);
        response.end();
    })
}
