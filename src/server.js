import express from 'express';
import {routeProducts, routeUsers} from './routes/Routes.js';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo';

// CREATE THE EXPRESS APP 
const app = express();
const Port = process.env.Port || 8080;
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true};

// MIDDELWERES
app.use(cors());

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://matigarcia:1708@test.0vglzka.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
    }),
    secret:'secret',
    resave: false,
    saveUninitialized:false
}));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

// USE THE ROUTES THAT I DEVELOP IN ROUTES.JS
app.use('/products', routeProducts);
app.use('/user', routeUsers);

// INDEX 
app.get('/', (req, res)=>{
    res.send('Hello World')
})


// CONNECTED TO MY DATABASE IN MONGO CLOUD AND STARTED THE SERVER
mongoose.connect('mongodb+srv://matigarcia:1708@test.0vglzka.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Database connected');
    app.listen(Port, ()=>{
        console.log(`Server is running on port ${Port}`)
    })
})
.catch((err)=>{
    console.error(err)
})


