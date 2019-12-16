const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const config = require('./config')

const app = new Koa()

app.env = config.env

app.use(bodyParser({
  enableTypes:['json', 'form', 'text'],
  jsonLimit:'50mb',
  queryString:{
    parameterLimit:100000000000000
  }
}))

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${new Date()} [${ctx.method}] ${ctx.url} - ${rt}`);
});

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


const demoRouter = require('./routes/demo')
app.use(demoRouter.routes())
app.use(demoRouter.allowedMethods())


console.info(`port:${config.webServer.port}`)
app.listen(config.webServer.port)