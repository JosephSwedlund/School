import Stage from './js/Stage.js';

var stage; 
var player; //the color of the player

$(function() {
	player = "white";
	stage = new Stage('myCanvas'); //pass in the canvas id to set up easeljs

	let ally = [
		['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'], //this is the bottom row
		['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'] //this is one above the bottom row
	];
	let enemy = [
		['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'], //this is the top row
		['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'] //this is one below the top row
	];

	stage.setupBoard(player, ally, enemy);

	stage.update();
});
