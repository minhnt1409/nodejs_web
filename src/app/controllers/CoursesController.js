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
    }

    update(req, res, next) {
        Course.findByIdAndUpdate(req.params.id, req.body)
            .then(res.redirect('/me/list'))
            .catch(next);
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((courses) => {
                res.render('courses/edit', courses);
            })
            .catch(next);
    }

    delete(req, res, next) {
        Course.findByIdAndDelete(req.params.id)
            .then(res.redirect('back'))
            .catch(next);
    }
}

export { CoursesController };
