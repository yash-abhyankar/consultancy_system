angular.module('sbAdminApp')
.controller('positionsController', function ($scope) {

    var jd = [

       { position: 'Chief Technology Officer', status: 'Open', cv: '1', id: '1' },
       { position: 'UI/UX Designer', status: 'Open', cv: '1', id: '2' },
       { position: 'Java Developer', status: 'Close', cv: '0', id: '3' }
       
    ];
    $scope.jd = jd;


});