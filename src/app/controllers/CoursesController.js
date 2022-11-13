import Course from '../models/Course.js'
import { mongooseToObject } from '../../until/mongoose.js'

class CoursesController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('courses/show', courses);
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const course = new Course(req.body);
        course.save({})
            .then(res.redirect('/'))
            .catch(next);

        res.send('courses/store');
    }
}

export { CoursesController };
