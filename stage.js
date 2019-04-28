function setupBoard() {
	let color = { one: player, two: (player!="white" ? "white":"black") }
	for (let col = 0; col < 8; col++) {
		for (let row = 0; row < 2; row++) //enemy pieces
			stage.addChild(new Pawn(row, col, color.two));
		for (let row = 6; row < 8; row++) //ally pieces
			stage.addChild(new Pawn(row, col, color.one)).on('click', Piece.focus);
	}
}

var stage; 
var player; //the color of the player

var range = [0, 1, 2, 3, 4, 5, 6, 7];

function init() {
	player = "white";
	stage = new createjs.Stage(document.getElementById('myCanvas'));

	//creates the board
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
}

$(init);