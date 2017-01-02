angular.module('sbAdminApp')
.controller('jobController', function ($scope, $stateParams) {

    $scope.jobId = $stateParams.jobId;

    //call job from web api for given id in stateparams only

    $scope.job =

       { position: 'Chief Technology Officer', status: 'Open', cv: '1', jobLocation: 'Mumbai', salaryRange: '21-35 Lakhs', experience: '3-5 Years', vacancy: '1', id: '1' }
    ;


    $scope.candidates = [

        { name: 'Yash', designation: 'Chief Technology Officer', currentCompany: 'ABPS solutions', qualification: 'mba', experience: '6 Years', currentCTC: '25 Lakhs', location: 'banglore', id: '1', time: '2:56 pm', score: '30' },
        { name: 'Ambarish', designation: 'Chief Technology Officer', currentCompany: 'atos solutions', qualification: 'btech', experience: '3 Years', currentCTC: '35 Lakhs', location: 'baroda', id: '2', time: '6:15pm', score: '23' },

    ];
});