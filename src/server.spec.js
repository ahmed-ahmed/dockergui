let expect = require('chai').expect;

describe('Server index', ()=> {
    let server = require('./server.js');

    it('should return error if the request have no url', () => {
        var request = {};
        expect(server.getRequestValues(request)).to.equal(null);
    });

    it('should extract the names of the controller, index', ()=> {
        var request = {
            url: `/images/index`
        };
        let actual = server.getRequestValues(request);
        expect(actual.controller).to.equal('images');
        expect(actual.action).to.equal('index');
    });

    it('should default to the index action if no action is specified', ()=> {
        var request = {
            url: `/images`
        };

        let actual = server.getRequestValues(request);
        expect(actual.controller).to.equal('images');
        expect(actual.action).to.equal('index');
        

        var request = {
            url: `/images/`
        };

        actual = server.getRequestValues(request);
        expect(actual.controller).to.equal('images');
        expect(actual.action).to.equal('index');
    });


    it('should get the controller from the controllers directory', ()=> {
        var controller = `controller`;
        let actual = server.getControllerFullPath(controller);
        expect(actual).to.equal(`./src/controllers/controller.js`);
    })
    // it('should execute the controller action and pass the results to the response')
    //
    // it('should return 404 response if the controller or action doesnot exists')
    //
    // it('should')
    //
    // it('should pass', ()=> {
    //     expect(true).to.equal(false);
    // });
    //
});
