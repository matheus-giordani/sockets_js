import io from "../server.js"


io.on('connection', (socket) => {
    console.log('someone connected!', socket.id);
    socket.on("text_editor", (textRecieve) =>{
        io.emit("text_editor_client", textRecieve )
    })
  });

