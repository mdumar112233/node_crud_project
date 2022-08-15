import express from 'express';
import home from './routes/home.js';
const app = express();
const port = process.env.PORT || 8000;
import connectDB from './db/connectDB.js';
import { join } from 'path';
const databaseURL = 'mongodb://localhost:27017';


// connect db
connectDB(databaseURL);

// encoded
app.use(express.urlencoded({extended: false})); 

// static file
app.use(express.static(join(process.cwd(), 'public')));

// view engin
app.set('view engine', "ejs");

// router
app.use('/home', home);

app.listen(port, () => {
    console.log('app ruing.....')
})


