
module.exports = {
  submit: async ctx => {
    ctx.success(ctx.request.body)
  }
}
