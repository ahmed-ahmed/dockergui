var http = require('http');


// console.log(__dirname);

http.createServer((request, response) => {
    let urlComponents = request.url.split('/');

    console.log(urlComponents);
    let controller = require(`./src/controllers/${urlComponents[1]}.js`);
    console.log(controller);
    if (controller) {
        let action = urlComponents[2];
        if(action) {
            controller[action](request,response);
        }
    }
    //
    //
    //
    // console.log(request.url);
    //
}).listen(9090);

console.log('Server is running on port:9090')
