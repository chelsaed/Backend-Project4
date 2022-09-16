const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login, 
  show
};

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
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function show(req, res) {
  const user = await User.findById(req.params.id);
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