# Game

**Stage**
  - the tiles are named 'row:col' and can are accessed using **stage.getChildByName(row+':'+col);**
  - '0:0' is the top left
  - '7:7' is the bottom right

**highlight(tileName)**
 - takes a tile name and hilights that single tile
 - returns the highlight object
 - does nothing and returns null if the tile doesn't exist
 - **highlight('3:5')** hilights 3:5
 - **highlight('-3:8)** does nothing

**revert(tileName)**
 - takes a tile name and hilights that single tile
 - does nothing if the tile doesn't exist
 - **revert('3:5')** -- makes 3:5 white
 - **revert('-1:8')** -- does nothing
  
 **highlightTiles(tileList)**
  - takes an array of tile names and call **hilight(tileName)** on each
  - returns an array of the higlight objects
 
 **revertHighlightedTiles(tileList)** 
  - takes an array of tile names and calls **revert(tileName)** on each
