angular.module('categoryModule',[])
    .controller('CategoryController',['$scope','$timeout',function($scope){

    }])
.service('data1Service',['$http',function($http){
    return {
        ZhuA:function(){
            return $http.get('resource/json1.json')
        },
        ZhuB:function(){
            return $http.get('resource/json2.json')
        }


    }
}])
    .controller('CategoryController',['$scope','data1Service',function($scope,data1Service){
        data1Service.ZhuA().success(function(res){
            $scope.arr = res.data.special;
            $scope.arr02 = res.data.goods;

            $scope.changeColor=function(num){
                $scope.id=num;
            }
        });
        // dataService.ZhuB().success(function(res){
        //
        //
        // });

    }])