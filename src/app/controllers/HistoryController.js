import Phong from '../models/Room.js'
import History from '../models/History.js'
import { multipleMongooseToObject } from '../../until/mongoose.js'

class HistoryController {
    history(req, res, next) {
        History.find({})
            .then(history => {
                res.render('history', { histories: multipleMongooseToObject(history) });
            })
            .catch(next);
    }

}

export { HistoryController };
