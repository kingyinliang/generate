const db = require('../../db')

const escapeReg = {'\\': '&slash;', '\'': '&squot;'}
// 出库转义
const escapeStr = (str) => {
  for (const escapeRegKey in escapeReg) {
    const reg = eval(`/${escapeReg[escapeRegKey]}/g`)
    str = str.replace(reg, () => { return `${escapeRegKey}` })
  }
  return str
}
// 进库前转义
const strEscape = (str) => {
  for (const escapeRegKey in escapeReg) {
    const reg = eval(`/[\\${escapeRegKey}]/g`)
    str = str.replace(reg, () => { return escapeReg[escapeRegKey] })
  }
  return str
}

module.exports = {
    query: async ctx => {
      if (ctx.query.id) {
            let work = await db.query(`select * from works where id=${ctx.query.id}`)
            if (work.length) {
              work[0].pages = JSON.parse(escapeStr(work[0].pages || '[]'))
              work[0].datasources = JSON.parse(escapeStr(work[0].datasources || '[]'))
              work[0].dialog = JSON.parse(escapeStr(work[0].dialog || '[]'))
              ctx.success({
                  work: work[0]
              })
            } else {
                ctx.success({
                })
            }
        } else {
            let works = await db.query('select * from works')
            works.forEach(work => {
                work.pages = JSON.parse(escapeStr(work.pages || '[]'))
                work.datasources = JSON.parse(escapeStr(work.datasources || '[]'))
                work.dialog = JSON.parse(escapeStr(work.dialog || '[]'))
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
        let pages = strEscape(JSON.stringify(params.pages))
        let datasources = strEscape(JSON.stringify(params.datasources))
        const sql = `update works set
        title='${params.title}',is_template=${params.is_template},description='${params.description}',dialog='${JSON.stringify(params.dialog)}',pages='${pages}',datasources='${datasources}'
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
              work[0].pages = JSON.parse(escapeStr(work[0].pages || '[]'))
              work[0].datasources = JSON.parse(escapeStr(work[0].datasources || '[]'))
              work[0].dialog = JSON.parse(escapeStr(work[0].dialog || '[]'))
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
