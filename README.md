# Game

<b>Stage</b>
  - the tiles are named 'row:col' and can are accessed using <b>stage.getChildByName(row+':'+col);</b>
  - '0:0' is the top left
  - '7:7' is the bottom right

<b>highlight(tileName) </b>
 - takes a tile name and hilights that single tile
 - if the tile doesn't exist, it does nothing
 - <b>highlight('3:5')</b> hilights 3:5
 - <b>highlight('-3:8)</b> does nothing

<b>revert(tileName)</b>
 - takes a tile name and hilights that single tile
 - does nothing if the tile doesn't exist
 - <b>revert('3:5')</b> -- makes 3:5 white
 - <b>revert('-1:8')</b> -- does nothing
  
 <b>highlightTiles(tileList)</b> 
  - takes an array of tile names and call <b>hilight(tileName)</b> on each
 
 <b>revertHighlightedTiles(tileList)</b> 
  - takes an array of tile names and calls <b>revert(tileName)</b> on each
