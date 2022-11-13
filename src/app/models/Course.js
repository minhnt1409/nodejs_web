import mongoose from "mongoose";
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String, required: true},
    age: { type: Number },
    sex: { type: String },
    slug: { type: String, slug: 'name' , unique: true},
}, {
    timestamps: true,
});

export default mongoose.model('Course', Course);
