const router = require('express').Router()
const athleteController = require('../controllers/athleteController')

router.get('/', athleteController.index)
//Do I need to have different controller for user vs athletes or are they they same? 
// router.get('/:id', athleteController.findAthlete)
router.post('/', athleteController.createNewAthlete) //is this correct for creating a new athlete profile? 
router.put('/:id', athleteController.updateAthleteProfile)
router.delete('/:id', athleteController.deleteAthlete)

 
module.exports = router 