import Course from '../models/Course.js'
import { multipleMongooseToObject } from '../../until/mongoose.js'

class SiteController {
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { courses: multipleMongooseToObject(courses) });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

export { SiteController };
