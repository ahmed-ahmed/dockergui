var http = require('http');

http.createServer((request, response) => {
    if(request.url.indexOf('.ico') > -1) {
        response.end();
        return;
    }
    let urlComponents = request.url.split('/');

    let controller = require(`./src/controllers/${urlComponents[1]}.js`);
    if (controller) {
        let action = urlComponents[2];
        if(action) {
            controller[action](request,response);
        } else if (controller.index){
            controller.index(request,response);
        } else {
            //todo: return 404
        }
    }
}).listen(9090);

console.log('Server is running on port:9090')
