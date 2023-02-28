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
        
        if(req.body.submit == 'create'){
            const room = new Room(req.body);
            room.save({})
                .then(res.redirect('/'))
                .catch(next);
        }
        if(req.body.submit == 'edit'){
            Room.findOneAndUpdate({id_phong: req.body.id_phong}, req.body)
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
        if(req.body.submit == 'nhan'){
            req.body.check_in = datetime;
            req.body.trang_thai = "hired";
            const history = new History(req.body);
            history.save({}).then(console.log("add history"));
        }else{
            req.body.trang_thai = "ready";
            req.body.so_nguoi_hien_tai = null;
            req.body.ten_nguoi_dai_dien = null;
            req.body.id_nguoi_dai_dien = null;
            var _cost;
            if(req.body.phuong_thuc_thue == "hour"){
                if(req.body.check_in[8] + req.body.check_in[9] == datetime[8] + datetime[9]){
                    var time = ((datetime[19] + datetime[20]) - (req.body.check_in[19] + req.body.check_in[20]))
                                + ((datetime[16] + datetime[17]) - (req.body.check_in[16] + req.body.check_in[17]))*60;
                    if(time <= 120) _cost = "100k";
                    else{
                        var cost = 100 + Math.round((time-120)/60)*20;
                        _cost = cost + "k";
                    }
                }
            }
            console.log(_cost);
            History.findOneAndUpdate({check_in: req.body.check_in}, {check_out: datetime, thanh_toan: _cost}).then(console.log("update history"));
            req.body.check_in = null;
            console.log(req.body);
        }
        console.log(req.body);
        Room.findOneAndUpdate({id_phong: req.body.id_phong}, req.body)
            .then(res.redirect('/rooms/' + req.body.id_phong))
            .catch(next);
    }

    edit(req, res, next) {
        console.log(req.params.slug );
        Room.findOne({ id_phong: req.params.slug })
            .then((rooms) => {
                res.render('rooms/edit', rooms);
            })
            .catch(next);
    }

    delete(req, res, next) {
        console.log(req.params.slug);
        Room.findOneAndDelete({id_phong: req.params.id})
            .then(res.redirect('/'))
            .catch(next);
    }
}

export { RoomController };
