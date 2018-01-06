
const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin()

// GET /posts 所有用户或者特定用户的文章页
// eg: GET /posts?author=xxx
router.get('/', function (req, res, next) {
  res.send('index')
})

// POST /posts/create 发表一篇文章
router.post('/create', checkLogin, function (req, res, next) {
  res.send('create')
})

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function (req, res, next) {
  res.send('create page')
})

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function (req, res, next) {
  res.send('show')
})

// GET /posts/:postId/edit 更新文章页
router.post('/:postId/edit', checkLogin, function (req, res, next) {
  res.send('update page')
})

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, function (req, res, next) {
  res.send('update')
})

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, function (req, res, next) {
  res.send('delete')
})

module.exports = router
