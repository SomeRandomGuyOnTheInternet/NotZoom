const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Allow your front-end origin
        methods: ["GET", "POST"]
    }
});

app.use(cors()); // Enable CORS for REST APIs

app.get('/', (req, res) => {
    res.send('Signaling server is running.');
});

io.on('connection', (socket) => {
    console.log(`User connected`);
    
    socket.on('join', (payload) => {
        const roomId = payload.room;
        const room = io.sockets.adapter.rooms.get(roomId);
        const numberOfClients = room ? room.size : 0;
    
        console.log(`Room ID: ${roomId}`);
        console.log(`Number of clients in room ${roomId}: ${numberOfClients}`);
    
        if (numberOfClients === 0) {
            console.log(`Creating room ${roomId} and emitting room_created socket event`);
            socket.join(roomId);
            socket.emit('room_created', {
                roomId: roomId,
                peerId: socket.id
            });
        } else {
            console.log(`Joining room ${roomId} and emitting room_joined socket event`);
            socket.join(roomId);
            socket.emit('room_joined', {
                roomId: roomId,
                peerId: socket.id
            });
        }
    });    

    // These events are emitted to all the sockets connected to the same room except the sender.
    socket.on('start_call', (event) => {
        console.log(`Broadcasting start_call event to peers in room ${event.roomId} from peer ${event.senderId}`);
        socket.broadcast.to(event.roomId).emit('start_call', {
            senderId: event.senderId
        });
    });

    // Events emitted to only one peer
    socket.on('webrtc_offer', (event) => {
        console.log(`Sending webrtc_offer event to peers in room ${event.roomId} from peer ${event.senderId} to peer ${event.receiverId}`);
        socket.broadcast.to(event.receiverId).emit('webrtc_offer', {
            sdp: event.sdp,
            senderId: event.senderId
        });
    });

    socket.on('webrtc_answer', (event) => {
        console.log(`Sending webrtc_answer event to peers in room ${event.roomId} from peer ${event.senderId} to peer ${event.receiverId}`);
        socket.broadcast.to(event.receiverId).emit('webrtc_answer', {
            sdp: event.sdp,
            senderId: event.senderId
        });
    });

    socket.on('webrtc_ice_candidate', (event) => {
        console.log(`Sending webrtc_ice_candidate event to peers in room ${event.roomId} from peer ${event.senderId} to peer ${event.receiverId}`);
        socket.broadcast.to(event.receiverId).emit('webrtc_ice_candidate', event);
    });
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
