const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/notebook'

const connectmongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected to mongoDB')
    })
}

module.exports = connectmongo;