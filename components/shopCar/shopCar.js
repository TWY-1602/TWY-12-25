/**
 * Created by YZTC on 2016/12/22.
 */
angular.module('shopCarModule',[])
    .controller('ShopCarController',['$scope','$timeout',function($scope,$timeout){
        $scope.showDel = false;
        $scope.text = "编辑";
        //是否全选
        $scope.isAll=false;


        //显示是否删除的确认界面
        $scope.isDel=true;
        //改变是否可以编辑的状态
        $scope.changeStatus= function () {
            if($scope.text == "编辑"){
                $scope.text = "完成"
                $scope.showDel = true;
            }else if($scope.text == "完成"){
                $scope.text = "编辑";
                $scope.showDel = false;
            }
        }

        
        //获取购物车中的数据
        $scope.arrChoosed =JSON.parse(localStorage.getItem('product'));
        var arrPrice = JSON.parse(localStorage.getItem('product'));
        allPrice(arrPrice);
        //显示购物车主界面
        showMain($scope.arrChoosed)
        function  showMain(arr) {
            if(arr.length>0){
                $scope.isHide=false;
            }else{
                $scope.isHide=true;
            }
        }



        //绑定选择与不选的class
        addClass(1)
        function addClass(num) {
            $scope.arrClass = [];
            for(var i = 0;i<$scope.arrChoosed.length;i++){
                if(num==1){
                    $scope.arrClass.push(false);
                }else{
                    $scope.arrClass.push(true);
                }
            }
        }


        //判断每个是否都已选中；
        function judgeAll() {
            var flag = true;
            for(var m = 0;m<$scope.arrClass.length;m++){
                if ($scope.arrClass[m]){
                    //只要有一个未选中
                    flag = false;
                    break;
                }
            }
            if(flag){
                $scope.isAll=false;
            }else{
                //只要有一个未选中，即为false，即
                $scope.isAll=true;
            }
        }


        //点击选择与不选商品
        $scope.isCheck = function (i) {
            $scope.arrClass[i] = !$scope.arrClass[i];
            if($scope.arrClass[i]){
                //将对应对象删除并重新计算价格
                for(var k = 0;k<arrPrice.length;k++){
                   if (arrPrice[k].des==this.$$watchers[3].last){
                       arrPrice.splice(k,1);
                       allPrice(arrPrice);
                   }
                }
            }else{
                //将对应对象添加进去并重新计算价格
                arrPrice.push(JSON.parse(localStorage.getItem('product'))[i]);
                allPrice(arrPrice);
            }
            judgeAll();
        }

        //计算价格
        function  allPrice(arr) {
            $scope.total = 0;
            for(var i = 0;i<arr.length;i++){
                $scope.total += arr[i].count*arr[i].price;
            }
            $scope.total = $scope.total.toFixed(2);
        }

        //点击是否全选的事件
        $scope.chooseAll = function() {
            $scope.isAll=!$scope.isAll;
            //如果全不选则每个产品选择消失
            if($scope.isAll){
                //单个产品选择消失
                addClass(2);
                //将计算价格的数组清空并重新计算价格
                arrPrice = [];
                allPrice(arrPrice);
            }else{
                //单个产品选中
                addClass(1);
                //计算价格
                arrPrice = JSON.parse(localStorage.getItem('product'));
                allPrice(arrPrice);
            }
        }
        

        //购物车主界面的显示隐藏
        if($scope.arrChoosed !=0){
            $scope.isHide = false
        }else{
            $scope.isHide = true;
        }
        //绑定下拉菜单的值
        $timeout(function () {
            var options = document.getElementsByClassName('selected')
            for(var i = 0;i<options.length;i++){
                options[i].setAttribute('selected','selected');
            }
        },50)
        //change 事件
        $scope.changeSelect = function (i) {
            console.log(this)
            arrProuct = JSON.parse(localStorage.getItem('product'));
            arrProuct[i].count = this.text1;
            localStorage.setItem('product',JSON.stringify(arrProuct));
            if(!$scope.arrClass[i]){
                for(var k = 0;k<arrPrice.length;k++){
                    if (arrPrice[k].des==this.$$watchers[3].last){
                        arrPrice[k].count=this.text1;
                        allPrice(arrPrice);
                        break;
                    }
                }
            }
        }
        $scope.delIndex = "";
        //删除商品
        $scope.delProduct = function (i) {
            $scope.isDel=false;
            $scope.delIndex = i;
        }

        //取消删除
        $scope.cancel = function () {
            $scope.isDel=true;
        }

        //确定删除
        $scope.confirm = function () {
            arrProuct = JSON.parse(localStorage.getItem('product'));
            arrProuct.splice($scope.delIndex,1);
            localStorage.setItem('product',JSON.stringify(arrProuct));
            //重新计算价格
            $scope.arrChoosed =JSON.parse(localStorage.getItem('product'));
            var arrPrice = JSON.parse(localStorage.getItem('product'));
            allPrice(arrPrice);
            $scope.isAll=false;
            addClass(1);
            $timeout(function () {
                var options = document.getElementsByClassName('selected')
                for(var j = 0;j<options.length;j++){
                    options[j].setAttribute('selected','selected');
                }
            },50);
            $scope.text = "编辑";
            console.log($scope.text)
            $scope.isDel=true;


            showMain(JSON.parse(localStorage.getItem('product')))

        }


    }])