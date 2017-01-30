const path = require('path');
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// no need for cookie based session for user, but since we are using jwt
// we dont wnat passport to use the cookie sesion default
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ 'hi': "there "});
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};

// module.exports = (app) => {
//   app.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//     // res.send(['cat', 'dog', 'dinosaur', 'fish'])
//   });
// }
