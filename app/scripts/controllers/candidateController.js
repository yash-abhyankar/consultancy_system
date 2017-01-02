angular.module('sbAdminApp')
.controller('candidateController', function ($scope, $stateParams) {

    $scope.candidateId = $stateParams.candidateId;
  //fetch data for candidate using this candidate id.

});
