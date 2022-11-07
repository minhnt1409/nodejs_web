import {router as newsRouter} from './news.js';
import {router as siteRouter} from './site.js';
function route(app){

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

export { route };
