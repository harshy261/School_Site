import express from 'express'
// imported express module 
import web from './routes/web.js'
// import from routes 

import {join } from 'path'
// we can make setting the path for static file more absolute using join 

import './models/userSchema.js'
import connectDB from './db/connectdb.js';
// import connectDB function 
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 



const app = express();
// created a instance of express 
app.use(express.urlencoded({extended:false}))  
app.use(express.json());
const port = process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000


// DATABASE CONNECTION 
connectDB(DATABASE_URL);


// SET TEMPLATE ENGINE
app.set('view engine', 'ejs')


app.use('/static',express.static(join(process.cwd(),'public')))
// serving static files



// LOAD ROUTES 
app.use('/',web);
// use the web imported from routes 





app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port

