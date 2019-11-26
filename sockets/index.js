import socketIo from "socket.io";

export default server => {
  const io = socketIo(server);
  io.on("connection", socket => {
    console.log("connection established")

    // joining the room
    socket.on('join-room', (data, callback) => {
      console.log(data);

      // fake error
      const err = true;
      if(err){
        callback({error: 'Fake error'});
      }
    });

    // client calls for a disconnection
    socket.on('client-disconnect', () => {
      socket.disconnect();
    });
    
    // when disconnected
    socket.on("disconnect", () => {
      console.log("disconnected socket");
    });
  });
};