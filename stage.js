function revertTiles(tileList) {
	tileList.forEach(revert);
}

function highlightTiles(tileList) {
	let highlights = new Array();
	tileList.forEach((tileName) => activeHighlights.push(highlight(tileName)));
	return highlights;
}

function highlight(tileName) {
	let tile = stage.getChildByName(tileName);
	if (tile) {
		var hl = stage.addChild(highlighter.clone()).set({ x: tile.x, y: tile.y, name: tile.name+'HL'});
		hl.on("click", function(event) { 
			move(tile.y/70, tile.x/70);
		});
		stage.update();
		return tile.name;
	}
}

function revert(tileName) {
	let highlight = stage.getChildByName(tileName+'HL');
	if (highlight) {
		stage.removeChild(highlight);
		stage.update();
	}
}

function checkWin() {
    if(pieces[!player * 1] < 1)
        alert("You have decimated the enemy team and their families are sad. I hope you're happy, you monster.");
}

function move(row, col) {
	let tile = stage.getChildByName(row + ":" + col);
	if(tile){
        var old = stage.getChildByName(row + ":" + col + "P");
        if(old){
            if(old.side == player){
                return;
            }else{
                stage.removeChild(old);
                pieces[!player * 1] -= 1;
                stage.update();
                checkWin();
            }
        }
		selected.set({ x: tile.x+35, y: tile.y+35, name: row + ":" + col + "P", row: row, col: col});
	}
	revertTiles(activeHighlights)
	activeHighlights = new Array();
	stage.update();
}

function place(row, col, color) {
	let tile = stage.getChildByName(row + ":" + col);
	if (tile && color == "white") {
		stage.addChild(whitePiece.clone()).set({ x: tile.x+35, y: tile.y+35, name: tile.name+'P', row: row, col: col, side: player});
		if(!player){
			stage.getChildByName(row + ":" + col + "P").on("click", function(event) { 
				selected = this;
				revertTiles(activeHighlights)
				activeHighlights = new Array();
				highlightTiles([(this.row-1)+":"+(this.col-1), (this.row-1)+":"+(this.col), (this.row)+":"+(this.col-1), (this.row+1)+":"+(this.col), (this.row)+":"+(this.col+1), (this.row-1)+":"+(this.col+1)]);
			});
		}
		stage.update();
	}else if (tile && color == "black") {
		stage.addChild(blackPiece.clone()).set({ x: tile.x+35, y: tile.y+35, name: tile.name+'P', row: row, col: col, side: !player * 1});
		if(player){
				stage.getChildByName(row + ":" + col + "P").on("click", function(event) { 
				selected = this;
				revertTiles(activeHighlights)
				activeHighlights = new Array();
				highlightTiles([(this.row-1)+":"+(this.col), (this.row)+":"+(this.col-1), (this.row+1)+":"+(this.col), (this.row)+":"+(this.col+1), (this.row+1)+":"+(this.col-1), (this.row+1)+":"+(this.col+1)]);
			});
		}
		stage.update();
	}
	return tile;
}

function setupBoard() {
	if(player){
		for (let col = 0; col < 8; col++) {
			for (let row = 0; row < 2; row++) {
				place(row, col, "white");	
			}	
		}
		for (let col = 0; col < 8; col++) {
			for (let row = 6; row < 8; row++) {
				place(row, col, "black");	
			}	
		}
	}else{
		for (let col = 0; col < 8; col++) {
			for (let row = 0; row < 2; row++) {
				place(row, col, "black");	
			}	
		}
		for (let col = 0; col < 8; col++) {
			for (let row = 6; row < 8; row++) {
				place(row, col, "white");	
			}	
		}		
	}
	
}

var stage;
var player = 0;
var pieces = new Array();
pieces[0] = 16;
pieces[1] = 16;
var selected;
var activeHighlights = new Array();
const highlightGraphics = new createjs.Graphics().f('#2af').drawRect(0,0,70,70);
const highlighter = new createjs.Shape().set({ alpha: 0.4, graphics: highlightGraphics });
const whiteGraphics = new createjs.Graphics().f('#AAA').drawCircle(0,0,30);
const whitePiece = new createjs.Shape().set({ alpha: 1, graphics: whiteGraphics });
const blackGraphics = new createjs.Graphics().f('#555').drawCircle(0,0,30);
const blackPiece = new createjs.Shape().set({ alpha: 1, graphics: blackGraphics });

$(function() {
	stage = new createjs.Stage(document.getElementById('myCanvas'));
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
	
	//highlight("5:5");
	
	place("2:2", "white");
	
	setupBoard();
	/*
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			stage.getChildByName(row + ":" + col + "P").on("click", function(event) {
				revertTiles(activeHighlights)
				activeHighlights = new Array();
				for (let x = -1; x < 2; x++) {
					for (let y = -1; y < 2; y++) {
						if(!(x == 0 && y == 0)){
							activeHighlights.push(highlight((row+y) + ":" + (col+x)));
							
						}
							
					}
				}
			})		
		}
	}
	*/	
		
		

	
});
