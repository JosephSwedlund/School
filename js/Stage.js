import Pieces from './Pieces.js';


export default function Stage(canvasID) {
	if (Stage.instance)
		return Stage.instance;

	this.Stage_constructor(document.getElementById(canvasID));

	var black = false;
	Stage.range.forEach((row) => {
		Stage.range.forEach((col) => {
			let tile = new createjs.Shape().set({ x: 70*col, y: 70*row });
			tile.color = (black ? '#222' : '#fff');
			tile.graphics.f(tile.color).dr(0,0,70,70);
			this.addChild(tile);
			black = !black;
		});
		black = !black;
	});

	Stage.instance = this;
}
let p = createjs.extend(Stage, createjs.Stage);

Stage.instance = null
Stage.range = [0, 1, 2, 3, 4, 5, 6, 7];
Stage.remove = (child) => Stage.instance.removeChild(child);
Stage.add = (child) => { return Stage.instance.addChild(child); };
Stage.get = (row, col) => { return Stage.instance.getChildByName(row+':'+col); };
Stage.update = () => Stage.instance.update();
Stage.invert = (row) => {
	return 7 - row;
}

p.setupBoard = function(player, ally, enemy) {
	let color = { one: player, two: (player!="white" ? "white":"black") }
	Stage.range.forEach((col) => {
		for (let row = 0; row < 2; row++) {
			let allyPiece = Pieces[ally[row][col]];
			let enemyPiece = Pieces[enemy[row][col]];
			this.addChild(new allyPiece(Stage.invert(row), col, color.one)).setClick(); //ally pieces
			this.addChild(new enemyPiece(row, col, color.two)); //enemy pieces
		}
	});
}

createjs.promote(Stage, 'Stage');