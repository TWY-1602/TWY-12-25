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
            },
            getCategory3:function () {
                return $http.get('resource/start-sale.json')
            },
            getCategory4:function () {
                return $http.get('resource/new5.json')
            }
        }
    }])
    .controller('Category1Controller',['categoryService','$scope','$timeout','$stateParams',function(categoryService,$scope,$timeout,$stateParams){
        // console.log($stateParams.id)
        $scope.sendId=$stateParams.id;
        if($stateParams.id==1){
            categoryService.getCategory1().success(function (res) {
                $scope.arrCategory =res.data.list;
            });
            categoryService.getCategory2().success(function (res) {
                $scope.arrCategory1 =res.data;
            });
        }else if($stateParams.id==2){
            categoryService.getCategory4().success(function (res) {
                $scope.arrCategory =res.data.list;
            });
        }else if($stateParams.id==3){
            categoryService.getCategory3().success(function (res) {
                $scope.arrCategory =res.data.list;
            })
        }






    }])