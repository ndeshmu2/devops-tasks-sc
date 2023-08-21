const assert = require('assert');
const http = require('http');
const app = require('../index');

describe('HTTP Server Test', () => {
  // Run the server before tests
  before(() => {
    app.start();
  });

  // Stop server after tests
  after(() => {
    app.stop();
  });

  describe('should return 200 OK', () => {
    it('status code', (done) => {
      http.get('http://127.0.0.1:3000', (response) => {
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });

  describe('should return a content', () => {
    it('"Hello, World!"', (done) => {
      http.get('http://127.0.0.1:3000', (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          assert.equal('Hello, World!\n', data);
          done();
        });
      });
    });
  });
});

