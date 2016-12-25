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
    .controller('SearchController',['$scope','$timeout','searchService',function($scope,$timeout,searchService){
        searchService.getSearch().success(function(res) {
            $scope.arrSearchList=res.data.list;
        })
        $scope.color=function () {
            $scope.id=this.$index;
        }
        searchService.getCate().success(function(res) {
            $scope.arr1=res.data[101];
            console.log(res.data[101]);
        })
        $scope.back=function () {
            history.back();
        }
    }])