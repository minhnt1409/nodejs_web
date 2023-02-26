import Phong from '../models/Room.js'
import History from '../models/History.js'
import { multipleMongooseToObject } from '../../until/mongoose.js'

class SiteController {
    home(req, res, next) {
        Phong.find({})
            .then(rooms => {
                res.render('home', { rooms: multipleMongooseToObject(rooms) });
            })
            .catch(next);
    }
    history(req, res, next) {
        History.find({})
            .then(history => {
                res.render('history', { history: multipleMongooseToObject(history) });
            })
            .catch(next);
    }
}

export { SiteController };
