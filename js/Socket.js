import Stage from './Stage.js';

let socket = io();

socket.on('connect', () => {
	console.log('connected');
});

socket.on('updateBoard', (piece, dest) => {
	console.log("here");
	console.log(piece.row+', '+piece.col);
	console.log(dest.row+', '+dest.col);
	Stage.get(Stage.invert(piece.row), piece.col).moveTo(Stage.invert(dest.row), dest.col);
	Stage.update();
});

export default socket;