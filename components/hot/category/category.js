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
            .controller('CategoryController',['$scope','$rootScope','data1Service','$stateParams','$interval',
                function($scope,$rootScope,data1Service,$stateParams,$interval){
                $scope.day=10;
                $scope.hour=21;
                $scope.min=46;
                $scope.second=11;
                $interval(function () {
                    $scope.second--;
                    if($scope.second<0){
                        $scope.min--;
                        $scope.second=59;
                        if($scope.min<0){
                            $scope.hour--;
                            $scope.min=59;
                            if($scope.hour<0){
                                $scope.day--;
                                $scope.hour=23;
                            }
                        }
                    }
                },1000);


                $scope.sendNum=$rootScope.num;
                data1Service.ZhuA($scope.sendNum).success(function(res){
                    $scope.arr = res.data.special;
                    $scope.arr02 = res.data.goods;

                });

                $scope.clicked;
                data1Service.ZhuB($scope.sendNum).success(function(res){
                    $scope.arr03=res.data.attr;
                    $scope.selectOne=function(i){
                        $scope.arr04=res.data.attr[i].list;
                        $scope.id2=i;
                    }
                    $scope.arr04=res.data.attr[0].list;
                    $scope.id2=0;

                });



                $scope.changeIndex=function (i) {
                    $scope.clicked=i;
                    $scope.id3=i;
                };

                $scope.isChange1=false;
                $scope.isChange2=false;
                $scope.isChange3=false;
                $scope.isChange4=false;
                $scope.isChange5=false;
                $scope.isChangeli=false;





            $scope.changeColor=function(str){
                $scope.id=str;
            };

            $scope.show=function(){
                $scope.isShow=true;
            };
            $scope.hid=function(){
                $scope.isShow=false;
            };
            $scope.back=function () {
                history.back()
            };
            $scope.confirm=function () {
                $scope.isChange4=true;
                $scope.isShow=false;
            };
            $scope.cancel=function () {
                $scope.isChange4=false;
                $scope.isShow=false;
                $scope.id3='不相等';
                $scope.clicked='不相等';
                };
        }])