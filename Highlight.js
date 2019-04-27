function Highlight(row, col) {
	let highlight = new createjs.Shape().set({ x: col*70, y:row*70, })
	highlight.graphics.f('#2af').drawRect(0,0,70,70);
	highlight.row = row;
	highlight.col = col;
	highlight.name = row+":"+col+"HL";
	highlight.alpha = 0.4;

	highlight.on("click",function (event) {
		Highlight.target.moveTo(this.row, this.col);
		stage.update();
	});

	Highlight.all.push(highlight);

	return highlight;
}
Highlight.all = new Array();

Highlight.target = null;