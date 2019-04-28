// Template for piece creation

/*
 * Replace each instance of 'MyPiece' with the name of the piece
 * 
 * Replace '...' with the code that fills the 'tiles' array
 *
 *
*/
import Piece from './Piece.js';
import Highlight from './Highlight.js';

function MyPiece(row, col, color) {
	this.Piece_constructor(row, col, color, MyPiece.pattern);
}
createjs.extend(MyPiece, Piece);

//this is the function that makes movement work
//it returns an array with the coordinates of where the piece can currenty go
MyPiece.pattern = () => {
	let piece = Highlight.target;
	let tiles = new Array();

	//logic for determining where the piece 'MyPiece' can go
	// tiles should by filled with objects like { row: someValue, col: someValue }
	// objects can be added with 'tiles.push({ row: someValue, col: someValue })'
	...

	return tiles;
};

createjs.promote(MyPiece, "Piece");
