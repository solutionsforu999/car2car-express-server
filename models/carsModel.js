const mongoose = require('mongoose');

const carsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            // required:[true,'Enter title please...']
        },
        brand: {
            type: String
            // required:[true,'Enter brand please...']
        },
        model: {
            type: String
            // required:[true,'Enter model please...']
        },
        modification_engine: {
            type: String
            // required:[true,'Enter modification_engine please...']
        },
        start_of_production_year: {
            type: String
            // required:[true,'Enter start_of_production_year please...']
        },
        body_type: {
            type: String
            // required:[true,'Enter body_type please...']
        },
        seats: {
            type: String
            // required:[true,'Enter seats please...']
        },
        doors: {
            type: String
            // required:[true,'Enter doors please...']
        },
        fuel_type: {
            type: String
            // required:[true,'Enter fuel_type please...']
        },
        acceleration_0_100_kmh: {
            type: String
            // required:[true,'Enter acceleration_0_100_kmh please...']
        },
        assisting_systems: {
            type: String
            // required:[true,'Enter assisting_systems please...']
        }

    },

    {
        timestamps: true
    }
)
const cars = mongoose.model('Cars', carsSchema);

module.exports = cars;