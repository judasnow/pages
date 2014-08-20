//
// 目的是基于 backbone 实现一个轻量级的 page 系统
// 主要是 方便在移动客户端中的浏览器使用
//
// @TODO 需要实现的功能
//
// 1 page 之间的转换
// 2 page 的回收(使用最简单的标记删除算法)
//   但是问题在于 如何确定那些页面是仍然需要的 而另一些则可以被回收
//
;(function() {
"use strict";

// 后台回收没有必要保留的页面对象
// 暂时使用 引用计数 引用的计算方法就是
// 查看链接数量
var Gc = function() {
    
};

//
// var page = new Page(template, views);
// 事件需要绑定在 view 还是绑定在 page 上？
// 不同page 之间能不能共享 view？
//
// 是一个 Backbone.View 对象的实例 or not ??
//
// 第一次触发页面的时候 才会生成 相应 page 对象的实例
//
var Page = function() {
    
};

Page.prototype.onCreate = function() {}
Page.prototype.onInit = function() {}


});


vaar loginPage = new Page();
Pages.route({
    "/login": loginPage,
    "/home": homePage
});

Pages.init();



