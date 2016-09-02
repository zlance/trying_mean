var app = angular.module('myapp',["ui.router"]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl: '/home.html',
			controller: 'mainCtrl'
		});
	$urlRouterProvider.otherwise('home');
}]);

app.controller('mainCtrl',[
	'$scope',
	'posts',
	function($scope,posts){
		$scope.test = 'Hello World!';
		$scope.posts = posts.posts;
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === '' ){ return; }

			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				votes:0 });
			$scope.title='';
			$scope.link='';

		};
		$scope.incrementVotes = function(post){
			post.votes += 1;
		}
	}
]);

.state('posts', {
  url: '/posts/{id}',
  templateUrl: '/posts.html',
  controller: 'PostsCtrl'
});

app.factory('posts',[function(){
	var o = {
		posts:[]
	};
	return o;
}]);