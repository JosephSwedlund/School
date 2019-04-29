import Piece from './Piece.js';
import Highlight from './Highlight.js';

//constructor
export default function Pawn(row, col, color) {
	this.Piece_constructor(row, col, color, Pawn.pattern);
}
createjs.extend(Pawn, Piece);

Pawn.pattern = () => {
	let piece = Highlight.target;
	let tiles = new Array();
	[0,1,2,3,5,7].forEach((dir) => tiles.push({ row: piece.row+Math.floor(dir/3)-1, col: piece.col+(dir%3)-1 }));
	return tiles;
};

createjs.promote(Pawn, "Piece");