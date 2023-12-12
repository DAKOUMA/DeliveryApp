import express, {request, response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import {PORT, mongoDBURL} from "./config.js";
import usersRoutes from './routes/usersRoutes.js';
import itemsRoutes from './routes/itemsRoutes.js' ;
import commandRoutes from './routes/commandsRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/user', usersRoutes);
app.use('/item', itemsRoutes);
app.use('/command', commandRoutes);

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to DeliveryApp Server')
})

mongoose
    .connect(mongoDBURL)
    .then((result) => {
        console.log('App connect to Database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
    }).catch((error) => {
        console.error(error);
    })
    