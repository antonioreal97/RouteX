const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const routes = require('./routes/api');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

require('dotenv').config();

app.use(express.json());
app.use('/api', routes);

io.on('connection', (socket) => {
  console.log('New client connected');
  require('./sockets/gps')(socket);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
