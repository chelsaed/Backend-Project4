const mongoose = require('mongoose')

const athleteSchema = new mongoose.Schema({
    name: String,
    email: String, 
    height: String, 
    weight: String, 
    image: String, 
    gradDate: String, 
    currentHS: String, 
    sport: String, 
    postionPlayed: String,
    isPlayer: Boolean, 
})

const Athlete = mongoose.model('Athlete', athleteSchema)

module.exports = Athlete