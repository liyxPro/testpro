var app=angular.module('myApp',['ng','ngRoute','ngTouch']);
app.config(function($routeProvider){
	$routeProvider
	.when('/start',{templateUrl:'tpl/start.html',controller:'startCtrl'})
	.when('/main',{templateUrl:'tpl/main.html',controller:'mainCtrl'})
	.when('/connection',{templateUrl:'tpl/connection.html'})
	.when('/message',{templateUrl:'tpl/message.html'})
	.when('/discovery',{templateUrl:'tpl/discovery.html'})
	.when('/search',{templateUrl:'tpl/search.html'})
	.when('/mine',{templateUrl:'tpl/mine.html'})
	.when('/personal',{templateUrl:'tpl/personalDetails.html',controller:'personCtrl'})
	.otherwise({redirectTo: '/start'})
})
app.controller('parentCtrl',function($scope,$location){
	$scope.jump=function(url){
		$location.path(url);
	}
	$scope.editData=function(){
		mui('#personalDetails').popover('toggle');
		$("#webView").css("top","0");
	}
	$scope.details=function(selector){
		mui("#"+selector).popover('toggle');
		console.log(selector);
	}
})
app.controller('startCtrl',function($scope){
	$scope.height=document.documentElement.clientHeight;
	$scope.width=document.documentElement.clientWidth;
	$scope.offsetWidth=document.getElementsByTagName('h4')[0].offsetWidth;
})
app.controller('mainCtrl',function($scope){
	$scope.data=new Date();
	$scope.mainWindow=function(selector){
		mui('#'+selector).popover('toggle');
	}
	$scope.thumbUpOld=10;
	$scope.thumbUpNew=$scope.thumbUpOld;
	$scope.thumbColor='thumbColor';
	$scope.thumbs=function(){
		//console.log(this);
		if($scope.thumbUpOld>$scope.thumbUpNew){
			$scope.thumbUpOld--;
			$scope.thumbColor='thumbColor';
		}else{	
			$scope.thumbUpOld++;
			$scope.thumbColor='thumbNewColor';
		}
	}
	$scope.datas=$scope.data.getMonth()+1+"月"+$scope.data.getDate()+"日"
	//console.log($scope.data.getMonth()+1+"月"+$scope.data.getDate()+"日");
})
app.controller('personCtrl',function($scope){
	
})
	
