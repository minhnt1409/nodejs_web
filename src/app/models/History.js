import mongoose from "mongoose";

const Schema = mongoose.Schema;

const History = new Schema({
    id_phong: { type: Number},
    ten_phong: { type: String, required: true},
    ten_nguoi_dai_dien: { type: String },
    id_nguoi_dai_dien: { type: Number },
    phuong_thuc_thue: { type: String, default: null},
    thanh_toan: { type: String, default: null },
    check_in: {type: String},
    check_out: {type: String, default: null },
});

export default mongoose.model('History', History);
