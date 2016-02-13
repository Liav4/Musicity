var text = { 
	questions : [
		{ timestamp:"dd/mm/yyyy hh:mm:ss" , topics:"#guitar #piano" , text:"qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq ", rating:"100", authorNickname:"1mynick1", id:1		},
		{ timestamp:"13:14" , topics:"#guitar #piano" , text:"2what is my name?!", rating:"101", authorNickname:"2mynick2" 

		,id:2},
		{ timestamp:"15:13" , topics:"#guitar #piano #guitar #piano #guitar #piano " , text:"3what is my name?!", rating:"1020", authorNickname:"3mynick3" 

		,id:3} 
]};


var questionObj = text;
/*for (j = 0; j < 3 ; j++) {
	alert(questionObj.questions[j].text);
}*/

var numOfQs = questionObj.questions.length;
if(numOfQs == 0 || numOfQs == null){
	//print a msg
}
$(document).ready(function(){
	
	for (var i = 0; i < numOfQs; i++) {
		var q = questionObj.questions[i];

		// There should already be a DOM element with the class 'question'. Read more about jQuery 'append'
		$('.questions').append('<div class = "question"><div class = "row"><p class = "col-md-12">' + 
		/*q.text*/q.text + '</p></div>' + '<div class = "row"> <div class = "col-md-4">' 
		+ /*time*/q.timestamp + '</div> <div class = "col-md-4">' + /*topics*/q.topics +
		 '</div><div class = "col-md-2"> rating: ' + q.rating/*rating*/ +
		  '</div>' +
		  
		  '<div class = "col-md-2"><button type="button" class="btn btn-default" aria-label="Left Align">'+
		  '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button><button type="button" class="btn btn-default" aria-label="Left Align">'+
		  '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button></div>'
		  + '<div class = "row">' + 
		  	'<div class = "col-md-2">' + q.authorNickname + '</div>'
		  + '</div>'
		   + '<div class="container">' + 
			'<label for="answer' + q.id + '" class="answer-button"><label for="show-answer' + q.id + '" class="show-answer-button">Provide an Answer</label></label>' + 
			'<input  class="u-hide show-answer-checkbox" type="checkbox" id="show-answer' + q.id  + '">' + 
			'<div class="form-group u-hide">' + 
				'<textarea class="form-control" rows="5" id="answer-text' + q.id  + '" placeholder = "Your Answer... (up to 300 characters)"></textarea>'
			+
			'<div>' + 
			'<input class="submit-the-answer"  type="submit" value="submit">' + 	
		'</div>' + 
			'</div></div></div>'

		  );
	}
/*	alert("nice");*/

})


