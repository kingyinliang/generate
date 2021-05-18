const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const template = require("koa-html-template")

const { routerResponse, initController, initRouter } = require('./initRouterControllers');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  formLimit:"10mb",
  jsonLimit:"10mb",
  enableTypes:['json', 'form', 'text']
}))

// cors跨域
app.use(cors())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/public/build-editor'))
app.use(template('/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(routerResponse())


// routes
// const v1Router = router().use('/v1', v1)
// app.use(v1Router.routes(), v1Router.allowedMethods())
// const v2Router = router().use('/v2', v2)
// app.use(v2Router.routes(), v2Router.allowedMethods())

// initRouterControllers(app)
let controlles = {}
initController(controlles);
let router = initRouter(controlles)

app.use(router.routes(), router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
