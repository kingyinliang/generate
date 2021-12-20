module.exports = app => ({
    'get /editor': app.controllers.v1.work.editor,
    'get /query': app.controllers.v1.work.query,
    'post /insert': app.controllers.v1.work.insert,
    'post /update': app.controllers.v1.work.update,
    'get /preview': app.controllers.v1.work.preview,
})
