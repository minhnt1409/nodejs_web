import { router as newsRouter } from './news.js';
import { router as siteRouter } from './site.js';
import { router as coursesRouter } from './courses.js';

function route(app) {

    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

export { route };
