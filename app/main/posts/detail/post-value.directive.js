module.exports = ['PostEndpoint', function (PostEndpoint) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            key: '=',
            value: '=',
            attribute: '=',
            type: '='
        },
        templateUrl: 'templates/posts/post-detail-value.html',
        link: function ($scope) {
            // Depending on whether we are dealing with a post task or a standard task
            // the css class is swapped. This Boolean manages that distinction.
            $scope.standardTask = $scope.type === 'standard';
            if ($scope.attribute.type === 'relation') {
                $scope.value = $scope.value.map(function (entry) {
                    return PostEndpoint.get({ id : entry });
                });
            }
        }
    };
}];
