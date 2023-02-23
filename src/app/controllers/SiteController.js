import Phong from '../models/Room.js'
import { multipleMongooseToObject } from '../../until/mongoose.js'

class SiteController {
    home(req, res, next) {
        Phong.find({})
            .then(rooms => {
                console.log("abc");
                res.render('home', { rooms: multipleMongooseToObject(rooms) });
            })
            .catch(next);
    }
    history(req, res, next) {
        Phong.find({})
            .then(rooms => {
                console.log("abc");
                res.render('home', { rooms: multipleMongooseToObject(rooms) });
            })
            .catch(next);
    }
}

export { SiteController };
