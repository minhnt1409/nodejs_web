import Course from '../models/Course.js'
import { multipleMongooseToObject } from '../../until/mongoose.js'

class MeController {
    list(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/list', { courses: multipleMongooseToObject(courses) });
            })
            .catch(next);
    }
}

export  { MeController };