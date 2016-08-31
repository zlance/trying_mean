var app = angular.module('myapp',["ui.router"]);

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

app.factory('posts',[function(){
	var o = {
		posts:[]
	};
	return o;
}]);