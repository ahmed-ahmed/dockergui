var http = require('http');
var server = require('./src/server.js');

exports.init =  (request, response) => {
    if(request.url.indexOf('.ico') > -1) {
        response.end();
        return;
    }

    let {controller,action,params} = server.getRequestValues(request);

    require(server.getControllerFullPath(controller))[action](request,response).then(data=> {
        data = JSON.stringify(data);
        response.write(data);
        response.end();
     });
};

exports.startServe = ()=> {
    http.createServer((request, response) => {
        exports.init(request,response); 
    }).listen(9090);
};

exports.startServe();

console.log('Server is running on port:9090')
