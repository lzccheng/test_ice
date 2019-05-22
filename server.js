const views = require('koa-views');
const path = require('path');
const Koa = require('koa');

const app = (module.exports = new Koa());

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

app.use(async function(ctx) {
  await ctx.render('index', { publicPath: 'http://localhost:4444/' });
});

app.listen(3000);