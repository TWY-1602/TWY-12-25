/**
 * Created by YZTC on 2016/12/22.
 */
angular.module('hotModule',[])
    .service('hotService',['$http',function($http){
        return{
            getA:function () {
              return $http.get('resource/main1.json')
            },
            getB:function () {
                return $http.get('resource/main2.json')
            },
            getC:function () {
                return $http.get('resource/main3.json')
            }
        }
    }])
    .controller('HotController',['$scope','$timeout','hotService',function($scope,$timeout,hotService){
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
            },50)

        })

        hotService.getB().success(function (res) {
            // console.log(res.data)
         });
        hotService.getC().success(function (res) {
            // console.log(res.data)
        })


    }])
