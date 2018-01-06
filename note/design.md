## 功能及路由设计如下：

1. 注册
  * 注册页：GET /signup
  * 注册（包含上传头像）：POST /signup
2. 登录
  * 登录页：GET /signin
  * 登录：POST /signin
  * 登出：GET /signout
3. 查看文章
  * 主页：GET /posts
  * 个人主页：GET /posts?author=xxx
  * 查看一篇文章（包含留言）：GET /posts/:postId
4. 发表文章
  * 发表文章页：GET /posts/create
  * 发表文章：POST /posts/create
5. 修改文章
  * 修改文章页：GET /posts/:postId/edit
  * 修改文章：POST /posts/:postId/edit
  * 删除文章：GET /posts/:postId/remove
6. 留言
  * 创建留言：POST /comments
  * 删除留言：GET /comments/:commentId/remove

> Restful 是一种 api 的设计风格，提出了一组 api 的设计原则和约束条件。

如上面删除文章的路由设计： `GET /posts/:postId/remove`

Restful 风格的设计： `DELETE /posts/:postId`

*可以看出，Restful 风格的 api 更直观且优雅。*

## 会话(Session)

> 由于 HTTP 协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识别具体的用户，这个机制就是会话（Session）。

### cookie 与 session 的区别

  1. cookie 存储在浏览器（有大小限制），session 存储在服务端（没有大小限制）
  2. 通常 session 的实现是基于 cookie 的，session id 存储于 cookie 中
  3. session 更安全，cookie 可以直接在浏览器查看甚至编辑

通过引入 express-session 中间件实现对会话的支持： `app.use(session(options))`

## 页面通知

> 可以通过 connect-flash 中间件实现这个功能。是基于 session 实现的

### express-session、connect-mongo 和 connect-flash 的区别与联系

  1. express-session: 会话（session）支持中间件
  2. connect-mongo: 将 session 存储于 mongodb，需结合 express-session 使用，我们也可以将 session 存储于 redis，如 connect-redis
  3. connect-flash: 基于 session 实现的用于通知功能的中间件，需结合 express-session 使用

## 权限控制
















