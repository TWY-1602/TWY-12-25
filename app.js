/**
 * Created by YZTC on 2016/12/22.
 */
document.documentElement.style.fontSize = innerWidth/20+"px";
window.addEventListener('resize',function(){
    document.documentElement.style.fontSize = innerWidth/20+"px";
});

var arrProuct = [];
window.onload= function () {
    if (!localStorage.getItem('product')){
        localStorage.setItem('product',JSON.stringify(arrProuct))
    }
}



var myApp = angular.module("myApp", ['ui.router','me-lazyload','angularCSS','hotModule','shopCarModule','mineModule','searchModule','mallCarModule','categoryModule','detailModule','rightModule']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/hot');
    $stateProvider
        .state("hot", {
            url: "/hot",
            templateUrl: "components/hot/hot.html",
            controller:"HotController",
            css:["components/hot/hot.css","components/hot/swiper-3.3.1.min.css"]
        })
        .state("mall", {
            url:"/mall",
            templateUrl: "components/mall/mall.html",
            controller:"MallController",
            css:"components/mall/mall.css"
        })
        .state("shopCar", {
            url:"/shopCar",
            templateUrl: "components/shopCar/shopCar.html",
            controller:"ShopCarController",
            css:"components/shopCar/shopCar.css"
        })
        .state("mine", {
            url: "/mine",
            css:"components/mine/mine.css",
            templateUrl: "components/mine/mine.html",
            controller:"MineController"
        })
        .state("hot.category", {
            url:"/category",
            templateUrl: "components/hot/category/category.html",
            controller:"CategoryController",
            css:"components/hot/category/category.css"
        })
        .state("hot.search", {
            url:"/search",
            css:"components/hot/search/search.css",
            templateUrl: "components/hot/search/search.html",
            controller:"SearchController"

        })
        .state("hot.detail", {
            url:"/detail",
            css:"components/hot/detail/detail.css",
            templateUrl: "components/hot/detail/detail.html",
            controller:"DetailController"

        })
        .state("mall.search", {
            url:"/search",
            css:"components/hot/search/search.css",
            templateUrl: "components/hot/search/search.html",
            controller:"SearchController"
        })
        .state("hot.search.right", {
            url:"/right",
            css:["components/hot/search/right/right.css","components/hot/search/search.css"],
            templateUrl: "components/hot/search/right/right.html",
            controller:"RightController"
        })
        .state("mall.search.right", {
        url:"/right",
        css:["components/hot/search/right/right.css","components/hot/search/search.css"],
        templateUrl: "components/hot/search/right/right.html",
        controller:"RightController"
    })
    ;
});