angular.module('sbAdminApp')
.controller('candidateController', function ($scope, $stateParams) {

    $scope.candidateId = $stateParams.candidateId;
    $scope.jobId = $stateParams.jobId;
    //use job id to fetch the designation of job in blue box
    $scope.jobDesig = "Chief Technology Officer"

    //fetch data for candidate using this candidate id.
    $scope.candidate = { name: 'Yash', designation: 'Chief Technology Officer', currentCompany: 'ABPS solutions', phone: '9988776655', qualification: 'mba', experience: '6', email: 'yash95@gmail.com', currentCTC: '25', location: 'banglore', id: '1', time: '2:56 pm', score: '30', expectedCTC: '30', noticePeriod: '90', skillsMust: ['java', 'dotnet', 'sql', 'angularjs'], skillsOptional: ['photoshop', 'gamer'] };

    //fetch data of comments using candidate id
    $scope.comments = [{ by: 'Interviewer', status: 'Interview Accepted', commentDetail: 'Not good performance' }, { by: 'Professor X', status: null, commentDetail: 'Okay' }, { by: 'HireX', status: 'Awaiting Candidate Input', commentDetail: null },
    { by: 'Interviewer', status: 'Interview Accepted', commentDetail: 'Not good performance' }, { by: 'Professor X', status: null, commentDetail: 'Okay' }, { by: 'HireX', status: 'Awaiting Candidate Input', commentDetail: null },
    { by: 'Interviewer', status: 'Interview Accepted', commentDetail: 'Not good performance' }, { by: 'Professor X', status: null, commentDetail: 'Okay' }, { by: 'HireX', status: 'Awaiting Candidate Input', commentDetail: null }];


    //by: retirve this username from login usser name
    $scope.username = "client"

    $scope.addComment = function () {


        if ($scope.inputComment) {

           
            
           
            var comment = new Object();  //new object made and pushed in comments array
            comment.by = $scope.username;
            comment.status = null;
            comment.commentDetail = $scope.inputComment;

            $scope.comments.push(comment);
            $scope.inputComment = "";
            document.getElementById('commentBox').focus();
            
           

        }

    }
});
