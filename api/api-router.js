const router = require('express').Router();
const bCrypt = require('bcryptjs');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

rourter.post('/hash', (req, res) => {
  // read a password from the body
  const password = req.body.password;
  // hash the password using bcryptjs
  const hashedPassword = !!password === true && bCrypt.hashSync(password, 15);
  // return it to the user in an object that looks like
  res.status(201).json({ password: password, hash: hashedPassword })
  // { password: 'original passsword', hash: 'hashed password' }
})

module.exports = router;
