import Stage from './js/Stage.js';

var stage; 
var player; //the color of the player

$(function() {
	player = "white";
	stage = new Stage('myCanvas');

	stage.setupBoard(player);

	stage.update();
});