import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import todoRoutes from './routes/todos.js';

const app = express();

dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/todos', todoRoutes);

const mongodb = process.env.mongodbUrl;

app.get('/', (req, res) => {
    res.send('welcome to server')

})

const PORT = process.env.PORT || 3003;

mongoose
    .connect(mongodb, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    }))
    .catch(err => console.log(err));
