const router = require('express').Router();
const { User } = require('../db/models');
// const adminOnly = require('../utils/adminOnly.js');
// const userOnly = require('../utils/userOnly.js')

module.exports = router;

// GET mounted on /api/users/
router.get('/', async (req, res, next) => {
  try {
    // const users = await User.findAll({
    //   // explicitly select only the id and email fields - even though
    //   // users' passwords are encrypted, it won't help if we just
    //   // send everything to anyone who asks!
    //   attributes: ['id', 'username', 'email'],
    // });
    res.send('users route')
    // res.json(users);
  } catch (err) {
    console.log('ERROR: ', err);
    next(err);
  }
});


