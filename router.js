const path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.send(['cat', 'dog', 'dinosaur', 'fish'])
  });
}
