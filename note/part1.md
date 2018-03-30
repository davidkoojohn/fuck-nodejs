## 学习 Node.js 的三个境界

* 打日志：console.log
* 断点调试：断点调试：node debugger 或node inspector 或vscode
* 测试驱动开发（tdd | bdd

> Node不是语言，不是框架，只是基于V8运行时环境。结合libuv能够通过js语法获得更好的等价于c/c++的性能。

### 基础学习

1）js语法必须会

1. js基本语法
2. 常见用法，比如正则，比如数据结构，尤其是数组的几种用法。比如bind/call/apply等等
3. 面向对象写法。js是基于对象的，所以它的oo写起来非常诡异。参见红皮书JavaScript高级编程，很多框架都是自己实现oo基础框架，比如ext-core等。

犀牛书，《JavaScript权威指南》，没事就多翻翻，看少多少遍都不为过。

> 先能写，然后再追求更好的写法，比如面向对象，再考虑更加极致的函数式写法。(`ps`: 循序渐进，步子迈大了不好。)

> **TypeScript会越来越好，TypeScript 的强大之处是要用过才知道的。**

1. 规模化编程，像Java那种，静态类型，面向对象，前端只有TypeScript能做到
2. 亲爹是微软安德斯·海尔斯伯格，不知道此人的请看 borland 传奇去
3. 开源，未来很好
4. 组合拳：TypeScript + VSCode = 神器

> 论面向对象

* 在es6规范出了更好一点的面向对象，通过class、extends、super关键字来定义类
* 抽象，继承，封装，多态4个基本特征。
* 没有类型系统，这在规模化编程里是非常危险的，一个函数，传参就能玩死人。于是现在流行使用flow和typescript来做类型校验。flow只是工具，比较轻量级。而typescript是es6超集，给es6补充了类型系统和更完善的面向对象机制，所以大部分人都会对ts有好感，很有可能是未来的趋势。

### 结论

* Node.js SDK里callback写法必须会的。
* Node.js学习重点: Async函数与Promise
    * 中流砥柱：Promise
    * 终极解决方案：Async/Await






