angular.module('indentModule',[])
    .controller('IndentController',['$scope','$timeout',function($scope){

    }])
    .controller('IndentController',['$scope', function($scope){
        $scope.back1=function () {
            history.back()
        };
    }])