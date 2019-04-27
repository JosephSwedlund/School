function Pawn(row, col, color) {
	return Piece(row, col, color, Pawn.pattern);
}

Pawn.pattern = () => {
	let piece = Highlight.target;
	let tiles = new Array();
	[0,1,2,3,5,7].forEach((dir) => tiles.push({ row: piece.row+Math.floor(dir/3)-1, col: piece.col+(dir%3)-1 }));
	return tiles;
};
