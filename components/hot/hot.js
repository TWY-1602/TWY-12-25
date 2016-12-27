/**
 * Created by YZTC on 2016/12/22.
 */
angular.module('hotModule',[])
    // .config(function ($stateProvider, $urlRouterProvider) {
    //     $urlRouterProvider.otherwise('/hot/category1');
    // })
    .service('hotService',['$http',function($http){
        return{
            getA:function () {
              return $http.get('resource/main1.json')
            },
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
    .controller('HotController',['$scope','$timeout','hotService','$state','$window','$rootScope',function($scope,$timeout,hotService,$state,$window,$rootScope){
        hotService.getA().success(function (res) {
            $scope.arrBanner=[];
            $scope.arrAdv=[];
            // console.log(res.data)
            //lunbo tu
            for(var i = 0;i<res.data.list.length;i++){
                $scope.arrBanner.push(res.data.list[i]);
                if(i==3){
                    break;
                }
            }
            for(var i = 3;i<res.data.list.length;i++){
                $scope.arrAdv.push(res.data.list[i]);
                if(i==6){
                    break;
                }
            }
            $timeout(function () {
                $scope.swiper = new Swiper ('.swiper-container', {
                    direction:'horizontal',
                    loop: true,
                    autoplay:1000,
                    auto:true,
                    autoplayDisableOnInteraction:false,
                    pagination: '.swiper-pagination'
                });
            },50);
            $scope.showNum =1;
            hotService.getCategory1().success(function (res) {
                $scope.arrCategory =res.data.list;
            });
            hotService.getCategory2().success(function (res) {
                $scope.arrCategory1 =res.data;
            });
            $scope.changeContent=function (id) {
                document.body.scrollTop=1300;
                document.documentElement.scrollTop=1300;
                $scope.showNum=id;
                if( $scope.showNum==1){
                    hotService.getCategory1().success(function (res) {
                        $scope.arrCategory =res.data.list;
                    });
                    hotService.getCategory2().success(function (res) {
                        $scope.arrCategory1 =res.data;
                    });
                }else if( $scope.showNum==2){

                    hotService.getCategory4().success(function (res) {
                        $scope.arrCategory =res.data.list;
                    });
                }else if( $scope.showNum==3){
                    hotService.getCategory3().success(function (res) {
                        $scope.arrCategory =res.data.list;
                    })
                }


            }
            // //改变上面的入口
            // $scope.changeEnter=function (num) {
            //     $state.go('hot.category',{ num : num});
            //     console.log(num)
            // }
            $scope.changeEnter=function (num) {
                localStorage.setItem('cateId',num);
                // $rootScope.num = num;
                document.onscroll=null;
            };
            //从今日爆款进入详情页
            $scope.enterDetail=function (id) {
                //$rootScope.goodId = id;
                localStorage.setItem('detailId',id);
                document.onscroll=null;
            }
            // $scope.isFix=false;
            // angular.element($window).bind("scroll", function(e) {
            //    // console.log(e.target.scrollingElement.scrollTop)
            //     if(e.target.scrollingElement.scrollTop>1300){
            //         $scope.isFix=true;
            //         console.log($scope.isFix)
            //     }else{
            //         $scope.isFix=false;
            //         console.log($scope.isFix)
            //     }
            // });

            // $scope.isShow=true;
            document.onscroll =function () {
                var scrollTop = window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
                // console.log(scrollTop)
                if(document.getElementsByClassName('main-bottom')[0].className){
                    if(scrollTop>1300){
                        document.getElementsByClassName('main-bottom')[0].className = "main-bottom fix";
                    }else{
                        document.getElementsByClassName('main-bottom')[0].className = "main-bottom";
                    }
                    if(scrollTop>500){
                        document.getElementById('returnTop').style.display="block";
                    }else{
                        document.getElementById('returnTop').style.display="none";
                    }
                }else{
                    document.onscroll=null;
                }
            }
            $scope.returnTop=function () {
                document.body.scrollTop=0;
                document.documentElement.scrollTop=0;
            }


        });



    }])
