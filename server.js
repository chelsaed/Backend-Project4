const express = require('express');
const app = express();
const port = 8000;
const morgan = require('morgan')
const cors = require('cors');
const athleteRoutes = require('../Backend-Project4/routes/athleteRoutes')
require('./database/connection');
//require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//var port = normalizePort(process.env.PORT || '8000');

//routes


app.use('/highschoolathlete', athleteRoutes)
app.use('/api/users', require('./routes/api/users'));

app.get('/', (req, res) => {
    res.json('Welcome')
})

//const port = process.env.PORT || 4001;

//middleware
//app.use(methodOverride("_method"));
//app.use(logger("dev"));

//app.use(express.static(path.join(__dirname, "build")));


//routes 
//app.use("/api/users", userRoute);


app.listen(port, () => {
    console.log(`✅ PORT: ${port} 🌟`);
  });