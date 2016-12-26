/**
 * Created by YZTC on 2016/12/25.
 */
angular.module('detailModule',[])
    .service('detailService',['$http',function($http){
        return {
            getDetail:function (id) {
                return $http.get('resource/detail'+id+'.json');
            }
        }
    }])
    .controller('DetailController',['detailService','$scope','$rootScope','$timeout',function(detailService,$scope,$rootScope,$timeout){


        detailService.getDetail($rootScope.goodId).success(function (res) {
            $scope.objDetail = res.data;
            $scope.des =$scope.objDetail.goods_desc;
            $scope.name =  $scope.objDetail.parameters[ $scope.objDetail.parameters.length-1].attr_value;
            $scope.back = function () {
                history.back();
            }

            document.getElementsByClassName('img')[0].innerHTML=$scope.objDetail.goods_desc;
        })
    }])