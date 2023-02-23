import mongoose from "mongoose";

const Schema = mongoose.Schema;

const History = new Schema({
    ten_phong: { type: String, required: true},
    ten_nguoi_dai_dien: { type: String },
    id_nguoi_dai_dien: { type: Number },
    thanh_toan: { type: String },
    check_in: {type: Date},
    check_out: {type: Date},
});

export default mongoose.model('History', History);
