import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/learn_web', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully to server');
    } catch (error) {
        console.log('connect failuer');
    }
}

export { connect };
