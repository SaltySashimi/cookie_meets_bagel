const User = require('../models').User;

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  User
  .findOne({ where: { email } })
  .then((existingUser) => {
    if (existingUser) // if does exist, create Error
      res.status(422).send({ error: 'Email is in use' });
    else // if does not exist, create and save record
      User.create({
        email: email,
        password: password
      }).then((user) => {
        res.json({ success: true });
      }).catch((err) => {
        console.log("500 Error: ", err.message);
        res.status(500).send({ error: err.name });
      });
  })
  .catch((err) => {
    next(err);
  });

};
