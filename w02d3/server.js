const net = require('net');
const port = 8008;

const server = net.createServer();

const connectedClients = []; // keep an array of connect clients

const broadcast = (senderClient, messageString) => {
  for (let connectedClient of connectedClients) {
    if (connectedClient === senderClient) {
      // i do not send the message back to the sender
    } else {
      connectedClient.write(`${senderClient.name} says ${messageString}`);
    }
  }
};

server.on('connection', (client) => {
  console.log(`a client has connected`);
  connectedClients.push(client);

  client.write(`Welcome to my Awesome Server!`);

  client.on('data', (message) => {

    console.log(`a client has said: ${message}`);
    console.log('typeof message', typeof message);

    const newMessage = message.toString();

    if (newMessage.startsWith('setName ')) {
      const clientName = newMessage.replace(/setName /, '');
      console.log(`Setting client name to ${clientName}`);
      client.name = clientName;
    }
    broadcast(client, message);
  });

});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
