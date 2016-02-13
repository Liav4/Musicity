var text = { 
	questions : [
		{ timestamp:"13:13" , topics:"#guitar #piano" , text:"1what is my name?!", rating:"100", nickname:"1mynick1" },
		{ timestamp:"13:14" , topics:"#guitar #piano" , text:"2what is my name?!", rating:"100", nickname:"2mynick2" },
		{ timestamp:"15:13" , topics:"#guitar #piano" , text:"3what is my name?!", rating:"100", nickname:"3mynick3" } 
]};


var questionObj = text;
/*for (j = 0; j < 3 ; j++) {
	alert(questionObj.questions[j].text);
}*/

$(document).ready(function(){
	
	for (var i = 0; i < 3; i++) {
		var q = questionObj.questions[i];

		// There should already be a DOM element with the class 'question'. Read more about jQuery 'append'
		$('.questions').append('<div class = "container"><div class = "row"><p class = "col-md-6">' + 
		/*q.text*/questionObj.questions[i].text + '</p></div>' + '<div class = "row"> <div class = "col-md-2">' 
		+ /*time*/questionObj.questions[i].timestamp + '</div> <div class = "col-md-2">' + /*topics*/questionObj.questions[i].topics +
		 '</div><div class = "col-md-2">' + questionObj.questions[i].rating/*rating*/ +
		  '</div></div>');
	}
	/*alert("nice");*/

})
