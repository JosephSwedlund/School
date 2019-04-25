//the tiles are named 'row:col' and can are accessed using 
//  stage.getChildByName(row+':'+col)

/*
	highlightTiles(tileList) takes an array of tile names and higlights them
	revertHighlightedTiles(tileList) takes an array of tile names and makes them their original color

	example

	highlightTiles(['1:3', '3:6']); highlights 1:3 and 3:6

	revertHighlightedTiles(['0:5', '4:6']); reverts 0:5 to black and 4:6 to white
*/


//to change the 
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

function revertHighlightedTiles(tileList) {
	tileList.forEach((tileName) => {
		revert(stage.getChildByName(tileName));
	});
}

function highlightTiles(tileList) {
	tileList.forEach((tileName) => {
		highlight(stage.getChildByName(tileName));
	});
}

function highlight(tile) {
	tile.graphics.beginFill('#06f').drawRect(0, 0,70,70);
	stage.update();
}

function revert(tile) {
	tile.graphics.beginFill(tile.color).drawRect(0, 0,70,70);
	stage.update();
}