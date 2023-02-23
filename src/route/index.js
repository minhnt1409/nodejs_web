import { router as siteRouter } from './site.js';
import { router as roomsRouter } from './rooms.js';

function route(app) {

    app.use('/rooms', roomsRouter);

    app.use('/', siteRouter);
}

export { route };
