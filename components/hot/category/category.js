angular.module('categoryModule',[])
    .controller('CategoryController',['$scope','$timeout',function($scope){

    }])
.service('data1Service',['$http',function($http){
    return {
        ZhuA:function(dataNum){
            return $http.get('resource/jsonlist'+dataNum+'.json')
        },
        ZhuB:function(dataNum){
            return $http.get('resource/jsonChoose'+dataNum+'.json')
        }


    }
}])
    .controller('CategoryController',['$scope','data1Service','$stateParams','$timeout',function($scope,data1Service,$stateParams,$timeout){
        // console.log($stateParams.num);
        $timeout(function () {
            console.log($stateParams.num);
            $scope.sendNum=$stateParams.num;
            data1Service.ZhuA($scope.sendNum).success(function(res){
                $scope.arr = res.data.special;
                $scope.arr02 = res.data.goods;

            });
            $scope.index=0;
            $scope.clicked=0;
            data1Service.ZhuB($scope.sendNum).success(function(res){
                $scope.arr03=res.data.attr;
                $scope.arr04=res.data.attr[$scope.index].list;

            });
        },100)



        $scope.changeIndex=function (i) {
            $scope.clicked=i;
        }
        $scope.changeColor=function(str){
            $scope.id=str;
        }
        $scope.back=function () {
            history.back()
        }


    }])