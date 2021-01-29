const router = require('express').Router()
const { Word } = require('../db/models')
module.exports = router

//GET mounted on /api/words
router.get('/', async (req, res, next) => {
  try {
   res.send('words route')
  } catch (error) {
    next(error)
  }
})
