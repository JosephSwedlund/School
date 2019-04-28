import Piece from './Piece.js';
import Pawn from './Pawn.js';

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
Stage.get = (name) => { return Stage.instance.getChildByName(name); };
Stage.update = () => Stage.instance.update();

p.setupBoard = function(player) {
	let color = { one: player, two: (player!="white" ? "white":"black") }
	Stage.range.forEach((col) => {
		for (let row = 0; row < 2; row++) //enemy pieces
			this.addChild(new Pawn(row, col, color.two));
		for (let row = 6; row < 8; row++) //ally pieces
			this.addChild(new Pawn(row, col, color.one)).on('click', Piece.focus);
	});
}

createjs.promote(Stage, 'Stage');