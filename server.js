import Koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import {database} from './mongodb'; // 引入mongodb
import {server} from './apolloServer';

database(); // 链接数据库并且初始化数据模型

const GraphqlRouter = require('./router');

const app = new Koa();
server.applyMiddleware({app});
const router = new Router();

const port = 3000;

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.use('', GraphqlRouter.routes());

app.use(router.routes())
   .use(router.allowedMethods());

app.listen({ port: port }, () => 
   console.log(`graphQL server listen port: ${port}`),
);

