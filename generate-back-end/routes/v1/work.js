module.exports = app => ({
    'get /query': app.controllers.v1.work.query,
    'post /insert': app.controllers.v1.work.insert,
    'post /update': app.controllers.v1.work.update,
    'get /preview': app.controllers.v1.work.preview,
})
