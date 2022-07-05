const { default: mongoose } = require('mongoose');
const mongoos = require('mongoose');
const mongoURI = 'mongodb://localhost:27017'

const connectmongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected to mongoDB')
    })
}

module.exports = connectmongo;