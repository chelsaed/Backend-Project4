const mongoose = require('mongoose')

const athleteSchema = new mongoose.Schema({
    name: String, 
    height: String, 
    weight: String, 
    image: String, 
    gradDate: String, 
    currentHS: String, 
    sport: String, 
    postionPlayed: String, 
})

const Athlete = mongoose.model('Athlete', athleteSchema)

module.exports = Athlete