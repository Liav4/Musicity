var idG = 777;
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
					vote:-1,
					questionId:32
				},
				{
					timestamp:"an234sdd/mm/yyyy hh:mm:ss",
					text:"ansdsa answ asn asnw",
					authorNickname:"Csfdsharlie wrote this ans",
					rating: 44,
					id:664,
					vote:1,
					questionId:323
				},
				{
					timestamp:"ansdd/mm/yyyy hh:mm:ss",
					text:"ans answ asn asnw",
					authorNickname:"Charlie wrote this ans2",
					rating: 4,
					id:13223,
					vote:0,
					questionId:322
				},
				{
					timestamp:"an234sdd/mm/yyyy hh:mm:ss",
					text:"ansdsa answ asn asnw",
					authorNickname:"Csfdsharlie wrote this ans",
					rating: 44,
					id:66344,
					vote:1,
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
			vote: 0,/*1 = like, 0 = none , -1 = dislike*/
			answers: [
				{
					timestamp:"ans2dd/mm/yyyy hh:mm:ss",
					text:"a22ns answ asn asnw",
					authorNickname:"Charlie-nck wrote this ans",
					rating: 8,
					id:127,
					vote:1,
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
					vote:1,
					questionId:32
				},
				{
					timestamp:"an234sdd/mm/yyyy hh:mm:ss",
					text:"ansdsa answ asn asnw",
					authorNickname:"Csfdsharlie wrote this answrote this ans",
					rating: 44.7,
					id:564,
					vote:-1,
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




var browseExistingQsApp = angular.module('viewNewlyQapp', []);

browseExistingQsApp.controller('listQs', function ($scope) {
	$scope.less = true;
	$scope.questions = questionsArr.questions;
	$scope.answers = questionsArr.questions.answers;
	$scope.name = "Charlie";
	$scope.providedAns = 'hello';
	$scope.submitAns = function(q) {
	    if (q.providedAns) {
	      alert('new answer to question with ID = ' + q.id + ' : ' + q.providedAns + 'num = ' + q.answers.length);
	      var currentdate = new Date(); 

	      var temptimestamp = currentdate.getDate() + '/'
	      		 + (currentdate.getMonth()+1) + '/' + 
	      		 currentdate.getFullYear() + ' ' +
	      		  currentdate.getHours() + ':' + 
	      		  currentdate.getMinutes() + ':' + 
	      		  currentdate.getSeconds();

	      (q.answers).push({
	      	timestamp:temptimestamp,
			text:q.providedAns,
			authorNickname:"Charlie-nck wrote this ans",
			rating: 0,
			id:idG,
			vote:0,
			questionId:q.id
	      });
	      idG ++;
	      q.providedAns = '';
	    }
	}
	if ( questionsArr.questions[0].id == 1)
	{
		alert('entered');
	//	temp = document.getElementById("like_q_1");
		//temp.style.border = "solid red;";
	}
	$scope.handleLike = function(q){
		//alert('handleLike');
		if(q.vote != 1)
		{
			
			if(q.vote == 0)
			{
				q.rating += 1;
			}
			else //q.vote == -1
			{
				q.rating += 2;
			}
			q.vote = 1;
		}
		else
		{
			q.vote = 0;
			q.rating -= 1;
		}
		//alert('vote = ' + q.vote);
	}

	$scope.handleDislike = function(q){
		if(q.vote != -1)
		{
			
			if(q.vote == 0)
			{
				q.rating -= 1;
			}
			else //q.vote == -1
			{
				q.rating -= 2;
			}
			q.vote = -1;
		}
		else
		{
			q.rating += 1;
			q.vote = 0
		}
}


});





browseExistingQsApp.controller('paggingCtr', function ($scope) 
{
	$scope.thisPage = 1;//initialize it as 1
	$scope.numOfPages = 7;//put here the number of pages 
	$scope.handleNextPage = function(){			
		$scope.thisPage += 1;		
		//request the ( $scope.thispage  ) page from the server
	}
	$scope.handlePrevPage = function(){
		$scope.thisPage -= 1;
		//request the ( $scope.thispage - 1 ) page from the server
	}

});


