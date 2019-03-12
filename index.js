const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require("./models/User"); 
require("./models/Survey");

require("./services/passport");

mongoose.connect(keys.mongoURI);



const app = express();

// this parse any incoming 'request payload' 
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);
// route handler - frist param is for where to sent the route & second param is something to be executed whenever a request 
// comes in to this route with this request type (get)


if (process.env.NODE_ENV === 'production') {
  // express will serve up production assets 
  // like our main.js File, or main.css file! 
  app.use(express.static('client/build'));

  // express will serve up the index.html file
  // if it doesnt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT); 


