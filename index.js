const express = require('express');
const serverConfig = require('./src/config/serverConfig');
const connectDB = require('./src/config/dbConfig');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));


app.listen(serverConfig.PORT,async()=>{
    await connectDB();
    console.log(`server got started on port ${serverConfig.PORT}`)
})