import Room from '../models/Room.js'
import History from '../models/History.js'
import { mongooseToObject } from '../../until/mongoose.js'

class RoomController {
    show(req, res, next) {
        Room.findOne({ id_phong: req.params.slug })
            .then((rooms) => {
                res.render('rooms/show', rooms);
            })
            .catch(next);
    }

    store(req, res, next) {

        if (req.body.submit == 'create') {
            const room = new Room(req.body);
            room.save({})
                .then(res.redirect('/'))
                .catch(next);
        }
        if (req.body.submit == 'edit') {
            Room.findOneAndUpdate({ id_phong: req.body.id_phong }, req.body)
                .then(res.redirect('/'))
                .catch(next);
        }
    }

    create(req, res, next) {
        console.log('create');
        res.render('rooms/create');
    }

    update(req, res, next) {
        var now = new Date();
        var datetime = now.toString().replace(' GMT+0700 (Indochina Time)', '');
        console.log(req.body);
        if (req.body.submit == 'nhan') {
            req.body.check_in = datetime;
            req.body.trang_thai = "hired";
            const history = new History(req.body);
            history.save({}).then(console.log("add history"));
        } else {
            req.body.trang_thai = "ready";
            req.body.so_nguoi_hien_tai = null;
            req.body.ten_nguoi_dai_dien = null;
            req.body.id_nguoi_dai_dien = null;
            History.findOneAndUpdate({ check_in: req.body.check_in }, { check_out: datetime, phuong_thuc_thue: req.body.phuong_thuc_thue, thanh_toan: req.body.pay }).then(console.log("update history"));
            req.body.check_in = null;
            req.body.phuong_thuc_thue = null;
        }

        Room.findOneAndUpdate({ id_phong: req.body.id_phong }, req.body)
            .then(res.redirect('/rooms/' + req.body.id_phong))
            .catch(next);
    }

    edit(req, res, next) {
        console.log(req.params.slug);
        Room.findOne({ id_phong: req.params.slug })
            .then((rooms) => {
                res.render('rooms/edit', rooms);
            })
            .catch(next);
    }

    delete(req, res, next) {
        console.log(req.params.slug);
        Room.findOneAndDelete({ id_phong: req.params.id })
            .then(res.redirect('/'))
            .catch(next);
    }
}

export { RoomController };
