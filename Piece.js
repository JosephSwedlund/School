function Piece(row, col, color, pattern) {
	let piece = new createjs.Shape().set({ color: color, pattern: pattern });
	piece.graphics.f((color == 'white' ? '#AAA' : '#555')).drawCircle(35,35,30);
	piece.moveTo = function(row, col) {
		this.name = row+":"+col;
		this.x = col * 70;
		this.y = row * 70;
		this.row = row;
		this.col = col;
		revert();
	}
	piece.capture = function() {
		Piece.count[this.color]--;
		stage.removeChild(this);
		stage.update();
		if(Piece.count[this.color] == 0)
			alert("The "+this.color+" army has been defeated!");
	}
	piece.moveTo(row, col);

	Piece.count[color]++;
	return piece;
}

Piece.count = { white: 0, black:0 };
Piece.focus = function() {
	revert();
	Highlight.target = this;
	highlight(this.pattern());
}
