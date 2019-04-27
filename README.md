# Game

**Hey**
 I redid the project to clean up some code. Now there is a function to make a Piece. I gave it a description below, but what's important to know is that the pattern function is how the piece moves. It should return an array of objects like 
`````
{ row: row, col: col} 
`````
and rest should be taken care of. You shouldn't have to worry about highlighting tiles capturing other pieces.

## Piece(row,col,color,pattern)
 - Makes a Piece object. Its like a class so you can say **new Piece(row,col,color,pattern)** to create a new piece
 -  **row** - the row the piece goes to
 - **col** - the colum the piece goes to
 - **color** - "black" or "white" to denote the side the piece belings to.
 - **pattern** - a function that returns a array of objects. The objects should have a **row** and a **col** field
 
  `````
//this will move forward
function pattern() {
      let piece = Highlight.target;
      let tiles = new Array();
      tiles.push({ row: piece.row - 1, col: piece.col });
      return tiles;
}
stage.addChild(new Piece(4,4, "white", pattern)).on('click', Piece.focus);
`````
This will make a piece at 4:4 that can move forward if your the white team.

Feel free to look at what I did in Pawn.js to define pieces
