const mongoose = require('mongoose');
async function db() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/googlebooks', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('successfuly connected to db');
    } catch (error) {
        console.log('error connecting to db: ');
        console.log(error);
    }
}
module.exports = db;
