const Authentication = require('./server/controllers/authentication');
const path = require('path');

module.exports = (app) => {
  app.post('/signup', Authentication.signup);
};

// module.exports = (app) => {
//   app.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//     // res.send(['cat', 'dog', 'dinosaur', 'fish'])
//   });
// }
