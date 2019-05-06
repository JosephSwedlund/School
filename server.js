//getting stuffs
const express = require('express');
const path = require('path');

//setting up server
const app = express();
app.set('views', __dirname);
app.set('view engine', 'ejs');
const server = app.listen(80,() => console.log('Server started'));

//midwares
app.use(express.static(path.join(__dirname, 'js')));

//url stuffs
app.get('/', (req, resp) => resp.render('index.ejs'));

//sockets
const io = require('socket.io')(server);

io.on('connect', (socket) => {
	socket.join('room');
	socket.room = 'room';
	socket.on('move', function (piece, dest) {
		this.to(this.room).emit('updateBoard', piece, dest);
	});
});