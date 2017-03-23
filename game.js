// game.js, a js file for all the game logic
console.log('game working');
//logic

var Cell= function(row, col){
	this.index =row + '-' + col;
	this.value =" ";
}

var Game ={
	turn: 'x',
	over: false,
	winner: null,
	board: [[]],

	buildBoard: function(){

		var boardCount =1;
		for(var i =0; i< 3;i++){
			var arr = [];
			this.board[i] =arr;
			for(var j=0; j<3;j++){
				var newCell = new Cell(i,j);
				this.board[i][j] = newCell;
			}
		}
	},

	changeTurn: function(){
		if(this.turn == 'x'){
			this.turn = 'o';
			return this.turn;
		}
		else if(this.turn == 'o'){
			this.turn = 'x';
			return this.turn;
		}
	},

	checkWin: function(){
		var winArr = [['0-0','0-1','0-2'], ['1-0','1-1', '1-2'], [ '2-0','2-1','2-2'],['0-0','1-0','2-0'],['0-1','1-0','2-1'],['0-2','1-2','2-2'],['0-0', '1-0', '2-2'],['0-2', '1-0','2-0']];
		
		for(var i =0; i<8;i++){
			var xCount =0;
			var oCount = 0;
			var winArrIndex = winArr[i];
			for(var j=0; j< 3;j++){
				var row = parseInt(winArrIndex[j].charAt(0));
				var column = parseInt(winArrIndex[j].charAt(2));
				var tempCell = this.board[row][column];
				if(tempCell.value == 'x'){
					xCount++; 
				}else if(tempCell.value == 'o'){
					oCount++;
				}
			}

			if(xCount == 3){
				console.log(xCount);
				this.over = true;
				this.winner = 'x';
			}
			else if(oCount == 3){
				console.log(oCount);
				this.over = true;
				this.winner = 'o';
			}
		}
		return this.over;
	},
	//not tested yet

	updateCell: function(row, col){
		this.board[row][col].value = this.turn;
		return this.board[row][col];
	},

	reset: function(){
		this.board = [[]];
		this.buildBoard();
		this.winner = null;
		this.over = false;
	}

}






