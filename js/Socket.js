import Stage from './Stage.js';

let socket = io();

socket.on('connect', () => {
	console.log('connected');
});

socket.on('setcolor', (color) => socket.color = color);

socket.on('updateBoard', (piece, dest) => {
	Stage.get(Stage.invert(piece.row), piece.col).moveTo(Stage.invert(dest.row), dest.col);
	Stage.startTurn();
	Stage.update();
});

var stage; 
var player; //the color of the player

socket.on('setup', () => {
	$(function() {
		console.log(socket.color);
		player = socket.color;
		stage = new Stage('myCanvas'); //pass in the canvas id to set up easeljs

		let ally = [
			['Pawn','Rook','Pawn','Rook','Rook','Pawn','Rook','Pawn'], //this is the bottom row
			['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'] //this is one above the bottom row
		];
		let enemy = [
			['Pawn','Rook','Pawn','Rook','Rook','Pawn','Rook','Pawn'], //this is the top row
			['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'] //this is one below the top row
		];

		stage.setupBoard(player, ally, enemy);

		stage.update();
	});
});

export default socket;