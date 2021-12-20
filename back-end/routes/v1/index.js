module.exports = app => ({
    'get /': app.controllers.v1.index.index,
    'get /detail': app.controllers.v1.index.detail
})
