'use strict';
console.log('images controller started');

var docker = require('./../services/docker.js');

exports.index = (request, response) => {
    return docker.getImages();
    // docker.getImages().then(images => {
    //     return images;
    // })
}
