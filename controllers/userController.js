const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;



const index = (req, res) => {
  User.find({}, (err, athlete)=>{
      if(err){
          res.status(400).json(err)
          return
      }

      res.json(athlete)

  })
}

async function signup(req, res) {
  try {
  const user = new User(req.body);
  
    await user.save();
    const token = createJWT(user);
    res.json(token);
    

  } catch (err) {
    // Probably a duplicate email
    
    res.status(400).json(err);

  } //return res.redirect('/api/users');
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    console.log("user", user);
    //if (!user) return res.status(401).json({err: 'bad credentials'});
    // user.comparePassword(req.body.pw, (err, isMatch) => {
    //   if (isMatch) {
        const token = createJWT(user);
        res.json({token});
    //   } else {
    //     return res.status(401).json({err: 'bad credentials'});
    //   }
    // });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function show(req, res) {
  const user = await User.findById(req.params.id);
  res.json(user);
}
async function addAthlete(req, res) {
  console.log("req.body", req.body);
  const user = await User.findById(req.params.id);
  user.athlete.push(req.body);
  await user.save();
  res.json(user);
}
/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}


module.exports = {
  signup,
  login, 
  show, 
  addAthlete,
  index
};
