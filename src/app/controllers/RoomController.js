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
            if(req.body.phuong_thuc_thue == "hour") {
                if(req.body.check_in[8] + req.body.check_in[9] == datetime[8] + datetime[9]){
                    var time = ((datetime[19] + datetime[20]) - (req.body.check_in[19] + req.body.check_in[20]))
                                + ((datetime[16] + datetime[17]) - (req.body.check_in[16] + req.body.check_in[17]))*60;
                    if(time <= 120) _cost = "100k";
                    else{
                        var cost = 100 + Math.round((time-120)/60)*20;
                        _cost = cost + "k";
                    }
                }else{
                    var time = (parseInt(datetime[19] + datetime[20]) - parseInt(req.body.check_in[19] + req.body.check_in[20]))
                                + ((parseInt(datetime[16] + datetime[17])+24) - parseInt(req.body.check_in[16] + req.body.check_in[17]))*60;
                    if(time <= 120) _cost = "100k";
                    else{
                        var cost = 100 + Math.round((time-120)/60)*20;
                        _cost = cost + "k";
                    }
                }
            }else if(req.body.phuong_thuc_thue == "night") {
                var time = parseInt(datetime[19]+datetime[20]) + ((datetime[16] + datetime[17]) - 9)*60;
                var cost = 200 + Math.round(time/60)*20;
                _cost = cost + "k"; 
            }else if(req.body.phuong_thuc_thue == "month") {
                if(req.body.check_in[4] + req.body.check_in[5] + req.body.check_in[6] == datetime[4] + datetime[5] + datetime[6]){
                    var cost = 400*(parseInt(datetime[8] + datetime[9]) - parseInt(req.body.check_in[8] + req.body.check_in[9])
                                    + Math.ceil((parseInt(datetime[16] + datetime[17])-8)/24) );
                    _cost = cost + "k";
                }else{
                    var month;
                    switch (datetime[4] + datetime[5] + datetime[6]) {
                        case 'Jan':
                          month = 1;
                          break;
                        case 'Feb':
                          month = 2
                          break;
                        case 'Mar':
                           month =3;
                          break;
                        case 'Apr':
                          month = 4;
                          break;
                        case 'May':
                          month = 5;
                          break;
                        case 'Jun':
                          month = 6;
                          break;
                        case 'Jul':
                          month = 7;
                          break;
                        case 'Aug':
                          month = 8;
                          break;
                        case 'Sep':
                          month = 9;
                          break;
                        case 'Oct':
                          month = 10;
                          break;
                        case 'Nov':
                          month = 11;
                          break;
                        case 'Dec':
                          month = 12;
                          break;
                    }
                    var year_in = req.body.check_in[11] + req.body.check_in[12] + req.body.check_in[13] + req.body.check_in[14];
                    var cost = 400*(parseInt(datetime[8] + datetime[9]) + (new Date(year_in,month,0)).getDate()
                                    - parseInt(req.body.check_in[8] + req.body.check_in[9])
                                    + Math.ceil((parseInt(datetime[16] + datetime[17])-8)/24) );
                    _cost = cost + "k";
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
