var board=new Array();
var hasConflicted=new Array();
var score=0;

$(function(){
	newgame();})

function newgame(){
	init();
	generateOneNumber();
	generateOneNumber();
	}
	
function Up(){
	if(moveUp())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
	}
	
function Right(){
	if(moveRight())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
	}	
	
function Down(){
	if(moveDown())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
	}	

function Left(){
	if(moveLeft())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
	}

function restartgame()
{
	$("#gameover").remove();
	updateScore(0);
	newgame();
}	

function init(){
	for(var i=0;i<4;i++)
	{
		board[i]=new Array();
		hasConflicted[i]=new Array();
		for(var j=0;j<4;j++)
		{
			board[i][j]=0;
			hasConflicted[i][j]=false;
			var gridCell=$("#grid-cell-"+i+"-"+j);
			gridCell.css("top",getPosTop(i,j));
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	
	updateBoardView();
	score=0;
	$("#score").text(0);
	}
	
function updateBoardView(){
	$(".number-cell").remove();
	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			$("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
			var numberCell=$("#number-cell-"+i+"-"+j);
			if(board[i][j]==0)
		    {
				numberCell.css("width","0px");
				numberCell.css("height","0px");
			    numberCell.css("top",getPosTop(i,j)+50);
			    numberCell.css("left",getPosLeft(i,j)+50);
		    }
			
			else
			{
				numberCell.css("width","100px");
				numberCell.css("height","100px");
			    numberCell.css("top",getPosTop(i,j));
			    numberCell.css("left",getPosLeft(i,j));
				numberCell.css("background-color",getNumberBackgroundCorlor(board[i][j]));
				numberCell.css("color",getNumberCorlor(board[i][j]));
			    numberCell.text(board[i][j]);
			}
			
			hasConflicted[i][j]=false;
		}
	}
	}
	
function generateOneNumber(){
    var randx=parseInt(Math.floor(Math.random()*4));
	var randy=parseInt(Math.floor(Math.random()*4));
	while(true)
	{
		if(board[randx][randy]==0)
		{
			break;
		}
		var randx=parseInt(Math.floor(Math.random()*4));
	    var randy=parseInt(Math.floor(Math.random()*4));
	}
	var randNumber=Math.random()<0.67?2:4;
	board[randx][randy]=randNumber;
	ShowNumberWithAnimation(randx,randy,randNumber);
    }
