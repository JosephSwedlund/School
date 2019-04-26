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
		stage.removeChild(highlight)
		stage.update();
	}
}

function move(row, col) {

	let currentLocation = ""+selected.row+selected.col;
			//console.log(currentLocation);
			let i = boardState.indexOf(currentLocation);

	let tile = stage.getChildByName(row + ":" + col);
	if(tile.x+35, tile.y+35)
		if(tile){
		//console.log(i);

//placeholders to move the piece back if something is already on the next space.
		let phX = selected.x;
		let phY	= selected.y;
		let phName = selected.name;
		let phRow = selected.row;
		let phCol = selected.col;

		selected.set({ x: tile.x+35, y: tile.y+35, name: row + ":" + col + "P", row: row, col: col});
		let nextLocation = ""+selected.row+selected.col;

		//console.log(boardState.slice(0, i)+boardState.slice(i+1, 33));
		//console.log(boardState);
		//console.log(boardStateColor);

	//setting the piece to the new space 
		let testBoard = boardState.slice(0, i).concat(boardState.slice(i+1, 33));
		let testBoardColor = boardStateColor.slice(0, i).concat(boardStateColor.slice(i+1, 33))

		//console.log(testBoardColor);

	//resetting the piece to the non-new space if something was already there. 
		if(testBoard.indexOf(nextLocation) != -1){
			selected.set({ x: phX, y: phY, name: phName, row: phRow, col: phCol});
		}
		if((boardStateColor[(testBoard.indexOf(nextLocation))] != testBoardColor[i]))
		{ 
			console.log(testBoardColor);
			console.log(boardStateColor);
			selected.set({ x: tile.x+35, y: tile.y+35, name: row + ":" + col + "P", row: row, col: col});
		}
		//console.log(testBoard);


		boardStateColor[i] = testBoardColor[i];
		checker = true;
		//console.log(boardState);
	}
	revertTiles(activeHighlights)
	activeHighlights = new Array();
	stage.update();
}

function place(row, col, color) {
	let tile = stage.getChildByName(row + ":" + col);
	if (tile && color == "white") {
		stage.addChild(whitePiece.clone()).set({ x: tile.x+35, y: tile.y+35, name: tile.name+'P', row: row, col: col});
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
		stage.addChild(blackPiece.clone()).set({ x: tile.x+35, y: tile.y+35, name: tile.name+'P', row: row, col: col});
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

var counter = 0;
function setupBoard() {
	if(player){
		for (let col = 0; col < 8; col++) {
			for (let row = 0; row < 2; row++) {
				place(row, col, "white");	
				boardStateColor[counter] = ("white");
				boardState[counter++] = (""+row+col);
			}	
		}
		for (let col = 0; col < 8; col++) {
			for (let row = 6; row < 8; row++) {
				place(row, col, "black");	
				boardStateColor[counter] = ("black");
				boardState[counter++] = (""+row+col);
			}	
		}
	}else{
		for (let col = 0; col < 8; col++) {
			for (let row = 0; row < 2; row++) {
				place(row, col, "black");
				boardStateColor[counter] = ("black");
				boardState[counter++] = (""+row+col);
			}	
		}
		for (let col = 0; col < 8; col++) {
			for (let row = 6; row < 8; row++) {
				place(row, col, "white");	
				boardStateColor[counter] = ("white");
				boardState[counter++] = (""+row+col);
			}	
		}		
	}
	
}

var boardState = [];
var boardStateColor = [];
var stage;
var player = true;
var selected;
var spaceOccupied = false;
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
		
		
	console.log(boardState);
	
});
