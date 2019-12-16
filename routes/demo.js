const Router = require('@koa/router')
const config = require('../config')
const sequelize = require('../sequelize')

const router = new Router({
  prefix: '/api/demo'
})

router
  .get('/', async ctx => {
    let sql = `
      select * from public.common_data
    `
    try {
      let result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
      })
      ctx.response.body = { content: result} 
    } catch (err) {
      console.error(err)
      ctx.response.body = { message: '服务器错误' }
    }

  })

module.exports = router