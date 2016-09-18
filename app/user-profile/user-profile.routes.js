module.exports = [
    '$routeProvider',
function (
    $routeProvider
) {
    /* todo: these routes should only exist when the user is admin! */
    $routeProvider
    .when('/profile', {
        controller: require('./user-profile.controller.js'),
        templateUrl: 'templates/users/profile/user-profile.html'
    });

}];
