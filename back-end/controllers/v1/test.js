module.exports = {
  a: ctx => {
    ctx.success({
      data: [{
        status: 'yellow',
        label: '空压罐',
        type: '手动',
        number: '621KW'
      }, {
        status: 'yellow',
        label: '1#空压机',
        type: '手动',
        number: '35KW'
      }, {
        status: 'yellow',
        label: '2#空压机',
        type: '自动',
        number: '72KW'
      }, {
        status: 'yellow',
        label: '3#空压机',
        type: '手动',
        number: '24KW'
      }, {
        status: 'yellow',
        label: '4#空压机',
        type: '手动',
        number: '47KW'
      }, {
        status: 'yellow',
        label: '5#空压机',
        type: '自动',
        number: '29KW'
      }, {
        status: 'yellow',
        label: '6#空压机',
        type: '自动',
        number: '33KW'
      }, {
        status: 'yellow',
        label: '7#空压机',
        type: '手动',
        number: '62KW'
      }, {
        status: 'yellow',
        label: '8#空压机',
        type: '自动',
        number: '92KW'
      }]
    })
  },
  b: ctx => {
    ctx.success({
      data: [
        ['日期', '销售量'],
        ['1月1日', 5451],
        ['1月2日', 2321],
        ['1月3日', 4567],
        ['1月4日', 2423],
        ['1月5日', 1312],
        ['1月6日', 3902]
      ]
    })
  }
}
