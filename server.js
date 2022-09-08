const express = require('express');
const app = express();
const port = 8000;
const morgan = require('morgan')
const cors = require('cors');
const athleteRoutes = require('../Backend-Project4/routes/athleteRoutes')
require('./database/connection');

//var port = normalizePort(process.env.PORT || '8000');

//routes
//const userRoute = require("./routes/api/userRoutes");
//const comicRoute = require("./routes/api/comicRoutes");

app.use('/highschoolathlete', athleteRoutes)

app.get('/', (req, res) => {
    res.json('Welcome')
})

//const port = process.env.PORT || 4001;

//middleware
//app.use(methodOverride("_method"));
//app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "build")));


//routes 
//app.use("/api/users", require("./routes/api/userRoutes"));
//app.use("/api/comics", require("./routes/api/comicRoutes"));


app.listen(port, () => {
    console.log(`✅ PORT: ${port} 🌟`);
  });