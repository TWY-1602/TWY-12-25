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
    .controller('RightController',['rightService','$rootScope','$scope','$stateParams','$timeout',function(rightService,$rootScope,$scope,$stateParams,$timeout){

        rightService.getCate().success(function(res) {
            console.log($rootScope.id)
            $scope.arrSearchCate=res.data[101+$rootScope.id];
            //console.log($scope.arrSearchCate);
        })
    }])