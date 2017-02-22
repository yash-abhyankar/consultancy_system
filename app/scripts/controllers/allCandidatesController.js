angular.module('sbAdminApp').
controller("allCandidatesController", function ($scope) {

    // to fetch all candidates who have applied.

    $scope.allCandidates = [
        { name: 'Yash', designation: 'Chief Technology Officer', currentCompany: 'ABPS solutions', qualification: 'mba', experience: '6 Years', currentCTC: '25 Lakhs', location: 'banglore', id: '1', time: '2:56 pm', score: '30' },
        { name: 'Ambarish', designation: 'Chief Technology Officer', currentCompany: 'atos solutions', qualification: 'btech', experience: '3 Years', currentCTC: '35 Lakhs', location: 'baroda', id: '2', time: '6:15pm', score: '23' },
        { name: 'Deep', designation: 'demipat', currentCompany: 'ABPS solutions', qualification: 'mba', experience: '6 Years', currentCTC: '25 Lakhs', location: 'banglore', id: '1', time: '2:56 pm', score: '30' },
        { name: 'Ambu', designation: 'Chief Technology Officer', currentCompany: 'atos solutions', qualification: 'btech', experience: '3 Years', currentCTC: '35 Lakhs', location: 'baroda', id: '2', time: '6:15pm', score: '23' },
        { name: 'Karan', designation: ' Officer', currentCompany: 'ABPS solutions', qualification: 'mba', experience: '6 Years', currentCTC: '25 Lakhs', location: 'banglore', id: '1', time: '2:56 pm', score: '30' },
        { name: 'Arcil', designation: 'Chief', currentCompany: 'atos solutions', qualification: 'btech', experience: '3 Years', currentCTC: '35 Lakhs', location: 'baroda', id: '2', time: '6:15pm', score: '23' },

    ]



});