import Stage from './js/Stage.js';

var stage; 
var player; //the color of the player

$(function() {
	player = "white";
	stage = new Stage('myCanvas');

	let ally = [['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'],['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn']];
	let enemy = [['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn'],['Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn','Pawn']];

	stage.setupBoard(player, ally, enemy);

	stage.update();
});