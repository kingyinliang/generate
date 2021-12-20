module.exports = app => ({
  'get /a': app.controllers.v1.test.a,
  'get /b': app.controllers.v1.test.b,
})
