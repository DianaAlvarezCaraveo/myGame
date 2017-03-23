// app.js, a js file for writing all the view updates and running the game
console.log('app working')
//tester

Game.buildBoard();
console.log(Game);
console.log(Game.board);

function renderturn(){
	$("#turn").text("Player: " + Game.turn);
}

function renderWin(){
	$("#turn").text(" Winner: " + Game.winner);
}

function play(cell){
	var cellIndex = cell.id;
	var row = parseInt(cellIndex.charAt(0));
	var col = parseInt(cellIndex.charAt(2));
	Game.updateCell(row, col);

	//prints text on cell
	if(cellIndex == "0-0"){
		$("#0-0").text(Game.turn);
	}
	else if(cellIndex == "0-1"){
		$("#0-1").text(Game.turn);
	}
	else if(cellIndex == "0-2"){
		$("#0-2").text(Game.turn);
	}
	else if(cellIndex == "1-0"){
		$("#1-0").text(Game.turn);
	}
	else if(cellIndex == "1-1"){
		$("#1-1").text(Game.turn);
	}
	else if(cellIndex == "1-2"){
		$("#1-2").text(Game.turn);
	}
	else if(cellIndex == "2-0"){
		$("#2-0").text(Game.turn);
	}
	else if(cellIndex == "2-1"){
		$("#2-1").text(Game.turn);
	}
	else if(cellIndex == "2-2"){
		$("#2-2").text(Game.turn);
	}

	$("cell").off("click");
	if(Game.checkWin()){
		renderWin();
	}
	else{
		Game.changeTurn();
		renderturn();
	}
}

function setClicks(){
	$( ".cell" ).click(function() {
 		play(this);
	});
}

function reset(){
	Game.reset();
	$(".cell").text("");
	renderturn();
	//reset clicks
	setClicks();
}

$(document).ready(function(){
	Game.buildBoard;
	setClicks();
	$(".reset").click(function(){
		reset();
	});

});



