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

    delete(req, res, next) {
        console.log(req.params.slug);
        Room.findOneAndDelete({id_phong: req.params.id})
            .then(res.redirect('/history'))
            .catch(next);
    }
}

export { HistoryController };
