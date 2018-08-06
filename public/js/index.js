var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Nevencho',
    text: 'Yup, that works for me. Idva si ot clienta i e mnogo chitavo'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
