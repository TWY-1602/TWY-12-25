/**
 * Created by YZTC on 2016/12/22.
 */
angular.module('searchModule',[])

    .service('searchService',['$http',function($http){
        return {
            getSearch:function () {
                return $http.get('resource/search.json');
            },
            getCate:function () {
                return $http.get('resource/category.json');
            }
        }
    }])
    .controller('SearchController',['$rootScope','$scope','$timeout','searchService','$state',function($rootScope,$scope,$timeout,searchService,$state){
        searchService.getSearch().success(function(res) {
            $scope.arrSearchList=res.data.list;
        });

        searchService.getCate().success(function(res) {
            $scope.id=0;
            $scope.arr1=res.data[101+$scope.id];
            $scope.color=function () {
                $scope.id=this.$index;
                $scope.arr1=res.data[101+$scope.id];
            };
        })
        $scope.back=function () {
            history.back();
        }
    }])