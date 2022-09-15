require('./connection')

const Athlete = require('../models/athlete')
const athleteSeed = require('./seeds.json')


Athlete.deleteMany({})
    .then(() => {
        return Athlete.insertMany(athleteSeed)
    })
        .then((athletes) => {
            console.log(athletes)
        })
        .catch(err => {
            console.log("Error in seeding data !!: ")
            console.log(err)
        })
        .finally(() => {
            process.exit()
        })