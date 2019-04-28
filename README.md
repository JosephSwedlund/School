# Game

## **Hey**
 I redid the project to clean up some code. I did some stuff with EaselJS classes and inheritence, so now making a new type of Piece should be very easy and clear. I included an example below and a file called ***PieceTemplate.js*** that has comments, and that chould explain how to make a piece.

### PieceTemplate
`````
import Piece from './Piece.js';
import Highlight from './Highlight.js';
  
function MyPiece(row, col, color) {
	this.Piece_constructor(row, col, color, MyPiece.pattern);
}
createjs.extend(MyPiece, Piece);

MyPiece.pattern = () => {
	let piece = Highlight.target;
	let tiles = new Array();

	//logic for determining where the piece MyPiece can go
	...

	return tiles;
};

createjs.promote(MyPiece, "Piece");

`````
