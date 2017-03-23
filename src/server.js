
exports.getRequestValues = request=> {
    if(!request.url) {
        return null;
    }

    let urlComponents = request.url.split('/');
    controller = urlComponents[1];
    action = urlComponents[2];

    if(!action) {
        action = `index`;
    } 

    return {
        controller, action
    };

}

exports.getControllerFullPath = controller => {
    return `./src/controllers/${controller}.js`;
};
