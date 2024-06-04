const mongoose = require('mongoose');
const serverConfig = require('./serverConfig')

async function connectDB(){
    try{
        await mongoose.connect(serverConfig.DB_URL)
        console.log('connected to database successfully')
    }catch(err){
        console.log('Not able to connect with database')
        console.log(err);
    }

}

module.exports=connectDB