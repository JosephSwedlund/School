var stage = new createjs.Stage(document.getElementById('myCanvas'));

var black = false;
for (let row = 0; row < 8; row++) {
	for (let col = 0; col < 8; col++) {
		let tile = new createjs.Shape();
		tile.color = (black ? '#222' : '#fff');
		tile.graphics.beginFill(tile.color).drawRect(0,0,70,70);
		tile.x = 70*col;
		tile.y = 70*row;
		tile.name = row+':'+col;
		stage.addChild(tile);
		black = !black;
	}
	black = !black;
}
stage.update();

function revertTiles(tileList) {
	tileList.forEach((tileName) => revert(tileName));
}

function highlightTiles(tileList) {
	tileList.forEach((tileName) => highlight(tileName));
}

function highlight(tileName) {
	let tile  = stage.getChildByName(tileName);
	if (tile) {
		tile.graphics.beginFill('#06f').drawRect(0, 0,70,70);
		stage.update();
	}
}

function revert(tileName) {
	let tile = stage.getChildByName(tileName);
	if (tile) {
		tile.graphics.beginFill(tile.color).drawRect(0, 0,70,70);
		stage.update();
	}
}
