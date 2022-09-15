const User = require('../models/user')

let create = (req, res) => {
    User.create(req.body, (err, u)=>{
        if(err){
            res.status(400).json(err)
            return
        }
            // res.render('profile', {u})
        res.json({u, message: 'Yay you created one'})
    })
}

const index = (req, res) => {
    // respond with our bookmarks
    User.find({}, (err, users)=> {
        if(err){
            res.status(400).json(err)
            return
        }
        // res.render('home', {bookmarks})
        res.json(users)
    })
    // .then(data => { res.json(data)})
}

let show = (req, res) => {
    User.findById(req.params.id, (err, u) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(u)
    })
}

let update = (req, res) => {
    // Update user and send it back
    User.findByIdAndUpdate(req.params.id, req.body, {new: true} ,(err, u) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        // send created user back as JSON
        res.json(u)
    } )
}

let  deleteIt= (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, u)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json({message: 'Item Deleted'})
    })
}
module.exports = {
    create,
    deleteIt,
    update,
    index,
    show
}