import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Phong = new Schema({
    id_phong: { type: Number, required: true},
    ten_phong: { type: String, required: true},
    loai_phong: { type: String,  required: true},
    gia_phong: { type: String, required: true},
    so_nguoi_toi_da: { type: Number, required: true},
    trang_thai: { type: String,  required: true},
    so_nguoi_hien_tai: { type: Number, DEFAULT: 0},
    ten_nguoi_dai_dien: { type: String },
    id_nguoi_dai_dien: { type: Number },
    check_in: {type: Date},
});

export default mongoose.model('Phong', Phong);
