const router = require('koa-router')();

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = '<h1>this is a users response!</h1>'
})

router.get('/bar', function (ctx, next) {
  ctx.body = '<h1>this is a users/bar response</h1>'
})

module.exports = router