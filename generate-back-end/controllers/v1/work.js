const db = require('../../db')

module.exports = {
    query: async ctx => {
        if (ctx.query.id) {
            let work = await db.query(`select * from works where id=${ctx.query.id}`)
            if (work.length) {
                work[0].pages = JSON.parse(work[0].pages)
                work[0].dialog = JSON.parse(work[0].dialog)
                ctx.success({
                    work: work[0]
                })
            } else {
                ctx.success({
                })
            }
        } else {
            let works = await db.query('select * from works')
            works.forEach(item => {
                item.pages = JSON.parse(item.pages)
            })
            ctx.success({
                works
            })
        }

    },
    insert: async ctx => {
        const params = ctx.request.body
        const sql = `insert into works(title,is_template,description,dialog,pages)
        values('${params.title}',${params.is_template},'${params.description}','${JSON.stringify(params.dialog)}','${JSON.stringify(params.pages)}')`
        let works = await db.query(sql)
        ctx.success({
            id: works.insertId
        })
    },
    update: async ctx => {
        const params = ctx.request.body
        console.log(params);
        const sql = `update works set
        title='${params.title}',is_template=${params.is_template},description='${params.description}',dialog='${JSON.stringify(params.dialog)}',pages='${JSON.stringify(params.pages)}'
        where id=${params.id}`
        let works = await db.query(sql)
        ctx.success({
            works
        })
    },
    preview: async ctx => {
        if (ctx.query.id) {
            let work = await db.query(`select * from works where id=${ctx.query.id}`)
            if (work.length) {
                work[0].pages = JSON.parse(work[0].pages)
                work[0].dialog = JSON.parse(work[0].dialog)
                await ctx.render('index',{
                    work: work[0]
                })
            } else {
                ctx.success({
                })
            }
        } else {
            ctx.fail({
                data: '没有id'
            })
        }
    },
    editor: async ctx => {
      await ctx.template("build-editor/index.html")
    }
}
