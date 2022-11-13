function multipleMongooseToObject(mongoose) {
    return mongoose.map(mongoose => mongoose.toObject());
}

function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

export { multipleMongooseToObject, mongooseToObject }
