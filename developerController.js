mainApp.controller("developerController", function ($scope, $interval) {

    $scope.clock = new Date().toLocaleTimeString();
    $interval(function () {
        //update time every 1 second, using interval service
        $scope.clock = new Date().toLocaleTimeString();
    }, 1000);

    $scope.developer = {
        firstName: "Mutai",
        lastName: "Mwiti",
        salary: 90000,
        languages: [
            {name: 'Python', score: 70},
            {name: 'JS', score: 80},
            {name: 'CSS', score: 75},
            {name: 'PHP', score: 90},
            {name: 'SQL', score: 85},
            {name: 'Java', score: 77}
        ],
        fullName: function () {
            var developerObject = $scope.developer;
            return developerObject.firstName + " " + developerObject.lastName;
        }
    };
});

