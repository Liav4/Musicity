var questionsArr = {
	questions : [
		{
			timestamp:"dd/mm/yyyy hh:mm:ss" ,
			topics: [{name:"topic1"} ,{name:"topic2"}],
			text:"qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq ",
			rating:100,
			authorNickname:"1mynick1",
			id:1,
			vote: 1,/*1 = like, 0 = none , -1 = dislike*/
			answers: [
				{
					timestamp:"ansdd/mm/yyyy hh:mm:ss",
					text:"ans answ asn asnw",
					authorNickname:"Charlie wrote this ans",
					rating: 4.7,
					id:123,
					questionId:32
				},
				{
					timestamp:"an234sdd/mm/yyyy hh:mm:ss",
					text:"ansdsa answ asn asnw",
					authorNickname:"Csfdsharlie wrote this ans",
					rating: 44.7,
					id:664,
					questionId:323
				},
				{
					timestamp:"ansdd/mm/yyyy hh:mm:ss",
					text:"ans answ asn asnw",
					authorNickname:"Charlie wrote this ans2",
					rating: 4.7,
					id:13223,
					questionId:322
				},
				{
					timestamp:"an234sdd/mm/yyyy hh:mm:ss",
					text:"ansdsa answ asn asnw",
					authorNickname:"Csfdsharlie wrote this ans",
					rating: 44.7,
					id:66344,
					questionId:3253
				}
			]
		},
		{
			timestamp:"q2/mm/yyyy hh:mm:ss" ,
			topics: [{name:"topic3"} ,{name:"topicds"}],
			text:"que que q qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq ",
			rating:102,
			authorNickname:"cha",
			id:2,
			vote: -1,/*1 = like, 0 = none , -1 = dislike*/
			answers: [
				{
					timestamp:"ans2dd/mm/yyyy hh:mm:ss",
					text:"a22ns answ asn asnw",
					authorNickname:"Charlie-nck wrote this ans",
					rating: 8.11,
					id:127,
					questionId:35
				}
			]
		},
		{
			timestamp:"dd/mm/yyyy hh:mm:ss" ,
			topics: [{name:"topic1"} ,{name:"topic2"}],
			text:"qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq ",
			rating:100,
			authorNickname:"1mynick1",
			id:88,
			vote: 1,/*1 = like, 0 = none , -1 = dislike*/
			answers: [
				{
					timestamp:"ansdd/mm/yyyy hh:mm:ss",
					text:"ans answ asn asnw",
					authorNickname:"Charliewrote this ansee32e",
					rating: 4.7,
					id:12783,
					questionId:32
				},
				{
					timestamp:"an234sdd/mm/yyyy hh:mm:ss",
					text:"ansdsa answ asn asnw",
					authorNickname:"Csfdsharlie wrote this answrote this ans",
					rating: 44.7,
					id:564,
					questionId:323
				}
			]
		},
		{
			timestamp:"dd/mm/yyyy hh:mm:ss" ,
			topics: [{name:"topic1"} ,{name:"topic2"}],
			text:"qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq ",
			rating:100,
			authorNickname:"1mynick1",
			id:1324,
			vote: 1,/*1 = like, 0 = none , -1 = dislike*/
			answers:[]
		}
		
	]
}

//alert(questionsArr.questions[2].answers.length);

var browseExistingQsApp = angular.module('browseExistingQsApp', []);

browseExistingQsApp.controller('listQs', function ($scope) {
  $scope.questions = questionsArr.questions;
  $scope.answers = questionsArr.questions.answers;
  $scope.name = "Charlie";

});

/*var qLen = questionsArr.questions.length;
var ansLen = 0;
for(i = 0 ; i < qLen ; i++)
{
	ansLen = questionsArr.questions[i].answers.length;
	if(ansLen == 1)
	{
		var myEl = angular.element[0]( document.querySelector( '#show-more' + questionsArr.questions[i].id) );
		alert(questionsArr.questions[i].id)
		var tempId = 'show-more' + questionsArr.questions[i].id;
		alert(tempId)
		var temp = document.getElementById('show-more');
		myEl.style.border = "solid red";
	}
}




*/











