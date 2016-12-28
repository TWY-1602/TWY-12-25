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


                // $scope.sendNum=$rootScope.num;
                data1Service.ZhuA(localStorage.getItem('cateId')).success(function(res){
                    $scope.arr = res.data.special;
                    $scope.arr02 = res.data.goods;

                });

                $scope.clicked;
                data1Service.ZhuB(localStorage.getItem('cateId')).success(function(res){
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
                    if(localStorage.getItem('cateId')==1){
                        if(i==3||i==5){
                            $scope.filterBy = this.$$watchers[1].last;
                        }else{
                            $scope.filterBy="";
                        }
                    }else {
                        $scope.filterBy = this.$$watchers[1].last;
                    }

                };
                $scope.filterBy="";
                $scope.changefilterBy=function () {


                }

                $scope.isChange1=false;
                $scope.isChange2=false;
                $scope.isChange3='ss';
                $scope.isChange4=false;
                $scope.isChange5=false;
                $scope.isChangeli=false;
                    
            $scope.Change1=function () {
                $scope.isChange1=!$scope.isChange1;
            };
            $scope.Change2=function () {
                $scope.isChange2=!$scope.isChange2;
                $scope.isChange3='ss';
                $scope.clickNum=0;

            };
            $scope.clickNum=0;
            $scope.Change3=function (type) {
                $scope.isChange2=false;
                $scope.clickNum++;
                if($scope.clickNum==1){
                    $scope.isChange3=true;
                    $scope.orderType=type;
                    $scope.des = true;
                }else if($scope.clickNum==2){
                    $scope.isChange3=false;
                    $scope.orderType=type;
                    $scope.des = false;
                }else if($scope.clickNum==3){
                    $scope.isChange3='ss';
                    $scope.clickNum=0;
                    $scope.orderType="";
                }


            };
            $scope.Change5=function () {
                $scope.isChange5=!$scope.isChange5;
                $scope.isChangeli=!$scope.isChangeli;
            };



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
                console.log(this)
            };
            $scope.cancel=function () {
                $scope.isChange4=false;
                $scope.isShow=false;
                $scope.id3='不相等';
                $scope.clicked='不相等';
                };
        }])