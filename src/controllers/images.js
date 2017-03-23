'use strict';
console.log('images controller started');
exports.index = (request, response) => {
    response.write('images/index');
    // Send the response body 
    response.end();
}
// function images(request, response) {
    // var vm = this;

    // this.index = () =>{
        // response.write('images/index');
    // }
// }
