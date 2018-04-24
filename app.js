const Koa = require('koa');
const koaviews = require("koa-views");
const koastatic = require("koa-static");

const users = require('./router/user');
const index = require('./router/index');

const app = new Koa();

// 配置静态文件路劲
app.use(koastatic(__dirname + "/static/"));

// 配置模板引用模块
app.use(koaviews(__dirname + "/src", {
	extension: 'pug'
}));

// 加载路由器
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

module.exports = app;