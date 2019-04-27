
function revert() {
	Highlight.all.forEach((highlight) => {
		stage.removeChild(highlight)
		delete highlight;
	});
}

function highlight(tileList) {
	tileList.forEach((props) => {
		let piece = stage.getChildByName(props.row+":"+props.col);
		if (!piece)
			stage.addChild(new Highlight(props.row, props.col));
		else if (piece.color != Highlight.target.color)
			stage.addChild(new Highlight(props.row, props.col)).on('click', () => piece.capture());
	});
	stage.update();
}

function setupBoard() {
	let color = { one: player, two: (player!="white" ? "white":"black") }
	for (let col = 0; col < 8; col++) {
		for (let row = 0; row < 2; row++)
			stage.addChild(new Pawn(row, col, color.two));
		for (let row = 6; row < 8; row++)
			stage.addChild(new Pawn(row, col, color.one)).on('click', Piece.focus);
	}
}

var stage;
var player;
//init
$(function() {
	player = "white";
	stage = new createjs.Stage(document.getElementById('myCanvas'));
	var black = false;
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			let tile = new createjs.Shape().set({ x: 70*col, y: 70*row });
			tile.color = (black ? '#222' : '#fff');
			tile.graphics.beginFill(tile.color).drawRect(0,0,70,70);
			stage.addChild(tile);
			black = !black;
		}
		black = !black;
	}
	setupBoard();
	stage.update();
});