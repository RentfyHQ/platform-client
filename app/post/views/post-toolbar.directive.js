module.exports = PostToolbarDirective;

PostToolbarDirective.$inject = [];
function PostToolbarDirective() {
    return {
        restrict: 'E',
        controller: PostToolbarController,
        templateUrl: 'templates/posts/views/post-toolbar.html'
    };
}

PostToolbarController.$inject = ['$scope', '$rootScope'];
function PostToolbarController($scope, $rootScope) {

  $scope.currentUser = $rootScope.currentUser;

}
