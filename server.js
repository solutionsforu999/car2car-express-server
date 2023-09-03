const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://myFirstCluster:123456780@first-cluster.cqachga.mongodb.net/?retryWrites=true&w=majority";
const Cars = require('./models/carsModel');
const app = express();
// const route=express().router();
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.json({ limit: '50mb' }));


app.get('/getCars', async (req, res) => {
    try {
        if (req.query.skip && req.query.limit) {
            const cars = await Cars.find().skip(req.query.skip).limit(req.query.limit);
            const total_matches = await Cars.find().count();
            res.status(200).json({ message: "There is a cars!", total_matches: total_matches, cars: cars });
        } else {
            const cars = await Cars.find();
            const total_matches = await Cars.find().count();
            res.status(200).json({ message: "There is a cars!", total_matches: total_matches, cars: cars });
        }

    } catch (err) {
        res.status(500).json({ "message": "can't get cars ,try again!", "error": err });
    }
})


app.post('/newCars', async (req, res) => {
    try {
        const cars = req.body.results;
        cars.forEach(async (car) => {
            const carObject = new Cars(car)
            await carObject.save();
        });
        res.status(200).json({ 'message': `${cars.length} cars added with success!` })
    } catch (error) {
        res.status(500).json({ 'message': `Error!`, 'error': error })

    }

})



app.get('/', (req, res) => {
    res.send('test')
})



mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'dbCars'
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen('4000', (req, res) => {
            console.log('Listening...');
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });