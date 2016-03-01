angular.module('reddit', ['ionic'])

.controller("RedditCtrl", function($http, $scope){
    $scope.stories = [];
    $http.get('https://www.reddit.com/r/funny.json')
        .success(function(response){
            angular.forEach(response.data.children, function(child){
                $scope.stories.push(child.data)
            })
        })
    
    
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
