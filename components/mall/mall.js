/**
 * Created by YZTC on 2016/12/22.
 */
angular.module('mallCarModule',[])


    .service('mallService',['$http',function($http){
        return $http.get('resource/mall.json')
    }])
    .controller('MallController',['mallService','$scope','$timeout',function(mallService,$scope,$timeout){
        mallService.success(function (res) {
            $scope.arrMall = res.data.list;
        })
    }])