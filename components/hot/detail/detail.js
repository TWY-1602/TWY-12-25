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
            //获取json数据
            $scope.objDetail = res.data;
            //console.log(res.data)
            $scope.name =  $scope.objDetail.parameters[ $scope.objDetail.parameters.length-1].attr_value;
            //返回上一级页面
            $scope.back = function () {
                history.back();
            }
            //将json数据中的标签写入页面
            document.getElementsByClassName('img')[0].innerHTML=$scope.objDetail.goods_desc;
            //显示隐藏购物界面
            $scope.isHide = true;
            $scope.showInfor = function () {
                $scope.isHide = false;
            }
            // $scope.hideInfor = function () {
            //     $scope.isHide = true;
            // }
            //购物车里的数值上下限
            $scope.arrNum = []
            var firstNum = $scope.objDetail.limit_number;
            for(var i = 0;i<($scope.objDetail.attribute.product_number-$scope.objDetail.limit_number);i++){
                $scope.arrNum.push(firstNum);
                firstNum++;
            };


            //localStorage
            console.log(localStorage.getItem('product'))
            $scope.addProduct= function () {
                $scope.isHide = true;
                var flag = false;
                var count = document.getElementsByTagName('select')[0].value;
                arrProuct = JSON.parse(localStorage.getItem('product'));
                for(var i = 0 ;i<arrProuct.length;i++){
                    if(arrProuct[i].des==$scope.objDetail.goods_name){
                        flag = true;
                        arrProuct[i].count+=count;
                        localStorage.setItem('product',JSON.stringify(arrProuct));
                        break;
                    }
                };
                if(!flag){
                    var product = {
                        img:$scope.objDetail.goods_thumb,
                        count:count,
                        price:$scope.objDetail.shop_price,
                        des:$scope.objDetail.goods_name
                    }
                    arrProuct.push(product);
                    localStorage.setItem('product',JSON.stringify(arrProuct));
                };
                console.log(JSON.parse(localStorage.getItem('product')))
            }


        })
    }])