const Gun = require('gun');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('GunDB relay peer is running');
});


Gun({ web: server, file: 'data' });


server.listen(process.env.PORT || 8765, () => {
  console.log('Gun relay server is running on port 8765');
});
