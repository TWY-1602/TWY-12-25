/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('rightModule',[])
    .service('rightService',['$http',function($http){
        return {
            getCate:function () {
                return $http.get('resource/category.json');
            }
        }
    }])
    .controller('RightController',['rightService','$scope','$stateParams','$timeout',function(rightService,$scope,$stateParams,$timeout){
        $scope.showRight=$stateParams.searchNum;


        rightService.getCate().success(function(res) {
            $scope.arrSearchCate=res.data[101];
            console.log(res.data[101]);
        })
    }])