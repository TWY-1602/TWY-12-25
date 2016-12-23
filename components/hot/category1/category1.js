/**
 * Created by YZTC on 2016/12/22.
 */
angular.module('category1Module',[])
    .service('categoryService',['$http',function($http){
        return{
            getCategory1:function () {
                return $http.get('resource/new.json')
            },
            getCategory2:function () {
                return $http.get('resource/new6.json')
            }
        }
    }])
    .controller('Category1Controller',['categoryService','$scope','$timeout',function(categoryService,$scope,$timeout){
        categoryService.getCategory1().success(function (res) {
            $scope.arrCategory1 =res.data.list;
            console.log($scope.arrCategory1)
        });
        categoryService.getCategory2().success(function (res) {
            $scope.arrCategory2 =res.data;
        })
    }])