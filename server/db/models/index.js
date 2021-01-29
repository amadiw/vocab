const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./users')
const Word = require('./words')


User.belongsToMany(Word, { through: 'UserWord' })
Word.belongsToMany(User, { through: 'UserWord' })

module.exports = {
  User,
  Word,
  // UserWord
}
