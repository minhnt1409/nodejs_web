import { router as historyRouter } from './history.js';
import { router as roomsRouter } from './rooms.js';
import Room from '../app/models/Room.js'
import { multipleMongooseToObject } from '../until/mongoose.js'

function route(app) {
    
    app.use('/rooms', roomsRouter);
    
    app.use('/history', historyRouter);

    app.use('/', (req, res, next) =>{
        Room.find({})
            .then(rooms => {
                res.render('home', { rooms: multipleMongooseToObject(rooms) });
            })
            .catch(next);
    });

}

export { route };
