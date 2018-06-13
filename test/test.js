var assert = require('assert');

var server = require('../server/server.js');
var request = require('supertest')(server);
//var expect = require('expect.js');

// try this
// https://codeforgeek.com/2015/07/unit-testing-nodejs-application-using-mocha/ 
//

// var superagent = require('superagent');
// var users = require('../common/models/country');
// var status = require('http-status');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


describe('Country', function() {
    describe('insert', function() {
        it('should insert a country', function() {

            
        
            // var Country;
        
            // before(function() {
            //     Country = server.models.Country;    
            // })
        
            // beforeEach(function (done) {
            //     Country.upsert({id: 1, name: "dnby"}, function() { done() });
            // })    
        
            it('Post a new country', function (done) {
                request.post('/api/Countries').send({name: "dnbyyy"}).expect(200, done);
             })

        });
    });
});

// var assert = require('chai').assert,
//     superagent = require('superagent'),
//     app = require('../server/server');

// describe('Person model', function() {
//   var server;

//   beforeEach(function(done) {
//     server = app.listen(done);
//   });

//   afterEach(function(done) {
//     server.close(done);
//   });

//   it('should log in and log out with live server', function(done) {
//     superagent
//       .post('http://localhost:3000/api/People/login')
//       .send({ email: 'john@doe.com', password: 'foobar' })
//       .set('Accept', 'application/json')
//       .set('Content-Type', 'application/json')
//       .end(function(err, loginRes) {
//         if (err) { return done(err); }

//           assert.equal(loginRes.status, 200);
//           assert.ok(loginRes.body);
//           assert.equal(loginRes.body.userId, 1);
//         }
//       });
//   });
// });