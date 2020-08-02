const http = require('http');
const socketio = require('socket.io');

const PORT = 5000;
const server = http.createServer();
const io = socketio(server);
const {switchBtn, getBtn} = require('./btnState');

io.on('connection', (socket) =>{
    socket.join('btn');

    socket.emit('getBtn', {btn: getBtn()});

    socket.on('switchBtn', ()=>{
        switchBtn();
        io.to('btn').emit('getBtn', {btn: getBtn()});
    });
});

server.listen(PORT, () => console.log(`Server has started.`));
