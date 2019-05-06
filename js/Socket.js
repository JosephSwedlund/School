import Stage from './Stage.js';

let socket = io();

socket.on('connect', () => {
	console.log('connected');
});

socket.on('updateBoard', (piece, dest) => {
	Stage.get(Stage.invert(piece.row), piece.col).moveTo(Stage.invert(dest.row), dest.col);
	Stage.startTurn();
	Stage.update();
});

export default socket;