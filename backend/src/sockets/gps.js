module.exports = (socket) => {
    socket.on('locationUpdate', (data) => {
      console.log('Location Update:', data);
      socket.broadcast.emit('locationUpdate', data);
    });
  };
  