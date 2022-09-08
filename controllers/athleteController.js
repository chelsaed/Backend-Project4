const Athlete = require ('../models/athlete')


const index = (req, res) => {
    Athlete.find({}, (err, athlete)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(athlete)

    })
}


const createNewAthlete = async (req, res) => {
    console.log(req.body);
    req.body.name = req.body.isPlayer === true;

    let newAthlete = await Athlete.create(req.body)

    res.json(newAthlete)

}

const updateAthleteProfile = (res, req) => {
    Athlete.findByIdAndUpdate(req.params.id, req.body, (err, athlete)=> {
        if(err){
            res.status(400).json(err)
            return
        }
        Athlete.find({}, (error, athlete) =>{
            res.json(athlete)
        })
    })
}

const deleteAthlete = (req, res) => {
    let { id } =  req.params
    console.log(id)

    Athlete.findByIdAndDelete(id, (err, deletedAthlete) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(deleteAthlete)
   })
}



 
module.exports = {
    index,
    createNewAthlete, 
    updateAthleteProfile, 
    deleteAthlete

}