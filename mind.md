## Mind
---
1. `typescript` 学习
    * `typescript` 的变量类型
    * `typescript` 中的类
    * `typescript` 中的接口
    * `typescript` 中的泛型
    * `typescript` 命名空间
    * `typescript` 装饰器
2. `axios` 巩固  
    如：
    * 并发多个请求 `axios.all() `
    * 创建实例 `axios.create()`
    * 拦截器 `axios.interceptors.request.use(fn, fn)` 和 `axios.interceptors.response.use(fn, fn)`
    * 取消请求 `axios.CancelToken`  
    [axios 文档](https://www.npmjs.com/package/axios)
3. `vuex` 巩固
    * `state`
    * `mutation` (`commit` 触发)
    * `action` (`dispatch` 触发)
    * `getter`
    * `module`
    * 辅助函数 如：`mapState` 等
4. `better-scroll` 创建滚动视图  
    [BetterScroll 1.x 文档](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/)  
    [BetterScroll 2.x 文档](https://better-scroll.github.io/docs/zh-CN/)
5. `swiper` 插件创建轮播图  
    [swiper 文档](https://www.swiper.com.cn/)
6. `HTML` 和 `CSS` 复习
    * 溢出省略号
    * `display` 的值
    * 元素水平垂直居中的多种实现方法
    * 命名锚点
    * 五大内核
    * `HTML5` 新增内容
    * `CSS3` 新增内容
    * 媒体查询和响应式
    * `DPR` 以及 `em`、`rem`、 `vw`、`vh`
    * 布局
        * `Div+CSS` 布局
        * `Float` 布局
        * `flex` 布局
        * `column` 布局
        * `Grid` 布局
        * 弹性布局
        * 等比缩放布局（`rem` 布局）
        * `VH`、`VW`  
        ......
7. `js` 中事件的巩固
    * 事件流  
    `IE` 事件流和 `DOM` 标准事件流的区别
    * 事件冒泡和事件捕获
    * 事件委托
    * 事件监听  
    同一元素要绑定多个同一事件，可以用事件监听 `addEventListener()`
8. `vue` 中插槽 `slot` 的使用
    * 后备内容（即默认值）
    * 具名插槽
    * 作用域插槽（可利用插槽传值）
    * 解构插槽
    * 缩写 `#`
9. `css` 自定义属性（`css` 变量）
    * 一般写在 `:root` 中
    * 属性前面带 `--` 的就是变量
    * 用 `var()` 使用变量，把变量放到括号内
10. `js` 复习 `1`
    * `ECMAScript`
        * 数据类型 基本`number` `string` `boolean` `null` `undefined` `symbol(es6)` 引用`object`
        * 运算符 `()` `单目运算` `算术运算` `关系运算` `逻辑运算` `三目运算` `赋值运算`
        * 条件语句 `if` `switch`
        * 循环语句 `while` `do while` `for`
        * 作用域，作用域链
        * 变量提升
        * 事件绑定
        * 数组，数组方法（以及 `ES5` 新增数组方法）
        * 堆和栈
        * 冒泡排序，选择排序
        * 字符串方法
        * 正则
        * `ES6` 新增内容 
            1. `let` `const` 
            2. `解构赋值` 
            3. `字符串模板` 
            4. `扩展运算符` 
            5. `Set` `Map` 
            6. `箭头函数` 
            7. `Promise` 
            8. `class` 
            9. `数组方法（如 find()、findIndex()、includes() ....）` 
            10. `字符串方法（如 startsWith()、endsWith() ....）`  
            .......
        * `this` 的理解
    * `BOM`
        * `window` 对象
            * `document`
            * `history`
            * `location`
            * `screen`
            * `navigator`
            * 定时器 `setInterval` `setTimeout`
            * `open()`  
            ......
    * `DOM`  
        * 元素节点
            * 父子节点 `parentNode` `childNodes` `children` `firstChild` `lastChild` `firstElementChild` `lastElementChild`
            * 兄弟节点 `nextSibling` `previousSibling` `nextElementSibling` `previousElementSibling`
        * 属性节点
            * `attributes`
        * 文本节点
        * 注释节点
        * `createElement()` `createTextNode()` 
        * `appendChild()` `insertBefore()` 
        * `replaceChild()` `cloneChild()`
        * `removeChild()` `renove()`
        * 事件对象 `pageX`, `pageY`, `clientX`, `clientY`, `offsetX`, `offsetY` ......
        * 事件监听 `addEventListener()`
        * 事件委托
        * 事件流 （`ie` 事件流和 `DOM` 标准事件流的区别）
        * `scroll` 家族
        * `offset` 家族  
        ........
11. `js` 复习 `2`
    * `http` 和 `https`
    * `url` 分解
    * `DNS`
    * `php` 了解巩固，`mySQL` 了解巩固
        * `php声明变量，输出echo print ....， 数据类型，字符串，数组 ....`
        * `create database`, `drop database`, `use 数据库`
        * `create table 表名(...)`
        * `insert into user set ...`
        * `delete from user where ...`
        * `update user set ...`
        * `select * from user where ...`
    * 本地存储 `cookie`, `localStorage`, `sessionStorage`
    * `JSON` 和 `XML`, 区别
    * `AJAX` `XMLHttpRequest()` 封装 `AJAX` 请求
    * `get` 和 `post` 请求的区别
    * `AJAX` 跨域，几种主流的解决跨域的方法
        * 开发中，前后端分离，一般设置代理 `proxy` 代理到服务主机，生产环境中基本不会出现问题，因为前后端代码在一个环境下了
        * 若请求其他网站上的资源，可以：
            * 服务端语言代理请求
            * `jsonp` 跨域
            * `CORS` 跨域资源共享
            * `nginx` 代理跨域
    * `Promise (ES6)`
        * `resolve()`
        * `reject()`
        * `then()`
        * `catch()`
        * `Promise.all()`
    * 闭包，闭包的作用
    * 垃圾回收机制
        * 标记清除
        * 引用计数
    * 作用域，作用域链
    * 原型，原型链
        * `protptype`
        * `_ _proto_ _`
        * `constructor`
    * 继承
        * `ES5` 实现继承
            1. 构造函数继承（对象冒充继承）（调用父类构造函数，改变 `this` 指向）
            2. 原型链继承（改变子类的原型指向）
            3. 混合继承（以上2种的结合）
            4. 拷贝继承（比如普通对象，利用拷贝，给需要继承的子对象）（浅拷贝）
            5. 也可以用 `Object.setPrototypeOf()` 来设置对象的原型来实现继承
        * `ES6` 实现继承
            * `Class` 类， `extends` 实现继承， `super()` 获得父类实例
    * `Object` 的方法 &emsp;..........
    * `jQuery`
        * 选择器
        * `jQuery DOM`
            * 节点操作
            * 常用方法
        * `jQuery` 动画
            * `slideUp()`, `slideDown()`
            * `toggle()`
            * `show()`, `hide()`
            * `fadeIn()`, `fadeOut()`
            * 自定义动画 `animate()`
        * `jQuery` 事件
            * `bind()`, `unbind()`
            * `on()`, `off()`
            * `one()`
            * `hover()`
            * `toggle()`
        * `jQuery` 事件对象
        * `jQuery` 扩展
            * `$.extend()`
            * `$.fn.extend()`
    * 设计模式
        * 工厂模式
        * 单例模式
        * 代理模式
        * 策略模式
        * 观察者模式（发布-订阅模式）  
        ..........
    * `ES6 Module`
        * 模块化
            * `commonJS` 规范，如 `node.js` 用于服务器，同步， `module.export`, `require`
            * `AMD` 规范，如 `requireJS` 用于浏览器，异步， `define`, `require`
            * `CMD` 规范，如 `seaJS` 用于浏览器，异步
            * `ES6 Module` 用于服务端和浏览器， `export`, `export default`, `import...from...`, `as`
        * `ES6 Module` 和 `commonJS` 区别
            * `commonJS` 是值的拷贝，`ES6 Module` 是值的引用  
            ..........
    * 脚本的 `defer` 和 `async`
        * `defer` 渲染完再执行
        * `async` 下载完就执行
    * `Node.js`
        * 特征
            * 单线程
            * 非阻塞 `I/O`
            * 事件驱动，事件循环机制
        * 搭建 `web` 服务器
            * `http` 模块
            * 读写文件，`fs` 模块，`readFile()`, `writeFile()`, `appendFile()`
            * `path` 模块
            * `url` 模块  
            .............
    * `Git` 和 `SVN`
        * `SVN` 
        * `Git` (各种指令)
    * `Gulp`, 前端自动化构建工具
        * `gulp.task()`
        * `gulp.src()`
        * `pipe()`
        * `gulp.dest()`
        * `gulp.watch()`
    * `SASS`
        * 变量 `$`
        * 嵌套
        * `@import`
        * `@mixin`, `@include`
        * `@extend`
        * `@if`, `@for`, `@function`
    * `requireJS`
        * `requirejs.config`
        * `require()`
        * `define()`
12. 服务器等相关知识巩固
    * 公众号二次开发，部署到腾讯云服务器
    * `nginx` 知识巩固理解，正向代理，反向代理等
13. `Node.js`
    * 模块化开发
    * 文件操作 `fs`
    * 地址的操作 `url`
    * 请求参数的操作 `querystring`
    * 发送请求 `http`  
    ..........
14. 正向代理和反向代理
    * 正向代理架设再客户机和目标主机之间，反向代理假设在服务器端
    * 正向代理代理客户端，反向代理代理服务端
15. `express` 的使用
    * `express` 搭建服务
    * `express` 处理静态资源， `express.static()`
    * 处理请求参数 `body-parser`
    * 中间件
    * 路由的使用 `new express.Router()`  
    ..........
16. 前后端分离与不分离
17. `mongodb`
    * `mongoose`
    * `save()`
    * `deleteOne()` ......
    * `updateOne()` ......
    * `find()` ......  
    .........
18. `session`
    * 用于服务端，加密，储存用户信息  ...........
    * `Session` 是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中
    * `Cookie` 是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现 `Session` 的一种方式
    [connect-mongodb-session](https://www.npmjs.com/package/connect-mongodb-session)
19. `mockjs`
    * 可以用来 `mock` 假数据 ..........  
    [Mock.js](http://mockjs.com/)
20. `Vue` 框架 
    * `vue` 指令
    * `computed`, `watch`
    * 生命周期
    * 组件声明（全局，局部）
    * 组件调用
    * 父子组件传值
    * 组件缓存 `keep-alive`, 动态组件 `component :is` 
    * `slot`, `v-slot`, 传值 .....
    * 非父子组件传值 `$emit` `$on`
    * 自定义指令 `Vue.directive()`
    * 组件上用 `v-model`
    * `vm.$children`, `vm.$parent(`)
    * `Vue.use()` 使用插件
    * 过滤器 `Vue.filter()`
    * `vue` 路由
        * 动态路由，路由传值 ........
        * 编程式导航， 也可以传值 ........
        * 重定向
        * 组件懒加载 
        * 路由 `props` 传值   
        .............
    * `vue` 动画 `transition`
    * `vuex`
        * `state`
        * `getters`
        * `mutations`
        * `actions`
        * `modules`
        * 命名空间 `namespaced`
        * 辅助函数  
        ..........
    * 路由守卫
        * `router.beforeEach((to,from,next)=>{})`
        * `router.beforeResolve((to,from,next)=>{})`
        * `router.afterEach((to,from)=>{})`
        * `beforeEnter((to,from,next)=>{})`
        * `beforeRouteEnter((to,from,next)=>{})`
        * `beforeRouteLeave((to,from,next)=>{})`
        * `beforeRouteUpdate((to,from,next)=>{})`  
    .........

***
#### 其他知识点 
> `web Worker`: `new Worker('...')`,起 `js` 线程到后台运行  
> `postMessage()` 发送消息，`terminate()` 方法结束进程，通过 `onmessage` 方法接受数据 等 .....  
[HTML 5 Web Workers](https://www.w3school.com.cn/html5/html_5_webworkers.asp)

> `new Blob()`
> binary large object 二进制大对象  
[浅谈JavaScript中的Blob对象](https://www.jianshu.com/p/33564726aed8)     

> `window.URL.createObjectURL()`  
[URL.createObjectURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)  
[前端接受后端文件流并下载的几种方法var blob = new Blob([content]); URL.createObjectURL(blob);](https://blog.csdn.net/cpongo5/article/details/88577883)

> `a` 标签的 `download` 属性  
> 如： ```<a id="id" download="a.txt">点我</a>```  
[HTML <a> download 属性](https://www.w3school.com.cn/tags/att_a_download.asp)

> `nginx` 的 `location` 配置，指定静态资源， `alias` 和 `root` 的用法

> `websocket`, `socket.io`  
[HTML5 WebSocket](https://www.runoob.com/html/html5-websocket.html)  
[socket.io官方文档](https://www.w3cschool.cn/socket/)

> `jsdom` 插件，可以用其获取本地或网页上脚本内的数据  
[jsdom 的讲解](https://www.npmjs.com/package/jsdom)

> `Vue` 的混入用法, 可以将一些公共的功能给拎出来，用混入的方法给组件扩展功能
> 分全局混入 `Vue.mixin()` 和局部混入 `mixins:[]`  
[Vue 混入 mixin](https://cn.vuejs.org/v2/guide/mixins.html)

> 单页面应用 `SPA` 和多页面应用 `MPA`  
> 单页面应用页面跳转快，用户体验流畅，但首屏加载相对较慢，`SEO` 差；  
> 多页面应用页面切换相对较慢，但首屏加载快，也利于 `SEO` 。  
[一张图告诉你单页面开发和多页面开发的区别](http://www.zhiliaotang.net/jishujiaoliu/web/965.html)

> 项目打包给手机端做成 `APP`，需要注意：  
> 1. 前端路由要改为 `hash` 模式
> 2. 项目的打包根路径要改为 `'/'` , 即 `vue.config.js` 中配置 `publicPath` 为 `'./'`
> 3. 根页面中，引入的静态资源全部用 `<%= BASE_URL %>`
> 4. 把打包的文件给了手机端，但是服务还是在服务器上的，数据还是通过服务器来，通过请求里面的 `baseURL` 有配置，那就需要服务端设置允许跨域了，这样才能通。   

> 做成 `APP` 也可以让手机端去调服务上的项目地址，不过打开速度较慢，因为这样项目还是部署在服务器上的，所以，根路径还是绝对路径的，路由 `history` 也没有问题

> 项目打包给后端，注意事项：
> 1. 前端路由配置为 `history` 模式时，要做好刷新时的后端配置
> 2. 让后端配置好各资源请求的路径
> 3. `publicPath` 默认是 `'/'`

> `hash` 模式和 `history` 模式   
[Vue-router 中hash模式和history模式的区别](https://www.jb51.net/article/144341.htm)

> `XSS` 和 `CSRF`  
> `XSS` : `Cross Site Scripting` , 跨站脚本攻击  
> 预防： 输入过滤、输出转义 等..........  
> `CSRF` : `Cross Site Request Forgery` , 跨站请求伪造  
> 预防： 验证 `HTTP Referer` 字段、请求地址添加 `token` 并验证 等.........  
[XSS和 CSRF攻击详解](https://www.jianshu.com/p/64a413ada155)

> `webpack`  
> `mode`  
> `entry`  
> `output`  
> `module`  
> `loader`  
> `plugin`  
> `devServer`  
[webpack 中文文档](https://www.webpackjs.com/concepts/)