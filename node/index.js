const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

function start() {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
  });
}

function stop() {
  server.close();
}

module.exports = { start, stop };

