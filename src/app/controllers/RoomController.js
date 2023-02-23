import Room from '../models/Room.js'
import { mongooseToObject } from '../../until/mongoose.js'

class RoomController {
    show(req, res, next) {
        Room.findOne({ slug: req.params.slug })
            .then((rooms) => {
                res.render('rooms/show', rooms);
            })
            .catch(next);
    }

    create(req, res, next) {
        console.log('create');
        res.render('rooms/create');
    }

    store(req, res, next) {
        const course = new Room(req.body);
        course.save({})
            .then(res.redirect('/'))
            .catch(next);
    }

    update(req, res, next) {
        console.log(req.body);
        Room.findOneAndUpdate({id_phong: req.body.id_phong}, req.body)
            .then(res.redirect('/rooms/show'))
            .catch(next);
    }

    edit(req, res, next) {
        Room.findById(req.params.id)
            .then((rooms) => {
                res.render('rooms/edit', rooms);
            })
            .catch(next);
    }

    delete(req, res, next) {
        Room.findByIdAndDelete(req.params.id)
            .then(res.redirect('back'))
            .catch(next);
    }
}

export { RoomController };
