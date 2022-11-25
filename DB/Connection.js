const mongoose = require('mongoose')

const URI = "mongodb://localhost:27017/comtel";

const connectDB = async () =>{
    console.log('db connected..!1111');
    await mongoose.connect(URI);
    console.log('db connected..!');
};

module.exports= connectDB;

