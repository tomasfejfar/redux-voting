import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);
  console.log('Server running on localhost:8090');

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    console.log('{io.engine.clientsCount} clients');
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
    socket.on('disconnect', () =>
      console.log('{io.engine.clientsCount} clients')
    );
  });
}
