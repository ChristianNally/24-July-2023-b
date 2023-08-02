const net = require('net');
const port = 8008;

const client = net.createConnection({
  port: port,
  host: 'localhost'
});

client.on('connect', () => {
  console.log(`client is connected to server`);
}); // sets up an event handler

client.on('data', (message) => {
  console.log(`Server says: ${message}`);
});

process.stdin.on('data', (input) => {
  client.write(input);
});
