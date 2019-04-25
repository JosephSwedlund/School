function revertTiles(tileList) {
	tileList.forEach(revert);
}

function highlightTiles(tileList) {
	tileList.forEach(highlight);
}

function highlight(tileName) {
	let tile = stage.getChildByName(tileName);
	if (tile) {
		stage.addChild(highlighter.clone()).set({ x: tile.x, y: tile.y, name: tile.name+'HL' });
		stage.update();
	}
}

function revert(tileName) {
	let highlight = stage.getChildByName(tileName+'HL');
	if (highlight) {
		stage.removeChild(highlight);
		stage.update();
	}
}

var stage = new createjs.Stage(document.getElementById('myCanvas'));
const highlightGraphics = new createjs.Graphics().f('#2af').drawRect(0,0,70,70);
const highlighter = new createjs.Shape().set({ alpha: 0.4, graphics: highlightGraphics });

var black = false;
for (let row = 0; row < 8; row++) {
	for (let col = 0; col < 8; col++) {
		let tile = new createjs.Shape().set({ x: 70*col, y: 70*row, name: row+':'+col });
		tile.color = (black ? '#222' : '#fff');
		tile.graphics.beginFill(tile.color).drawRect(0,0,70,70);
		stage.addChild(tile);
		black = !black;
	}
	black = !black;
}

stage.update();

highlightTiles(['0:0', '0:1', '0:2', '0:3', '0:4']);
revertTiles(['0:1', '2:3']);
