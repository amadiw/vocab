const Sequelize = require('sequelize')
const db = require('../db')

const Word = db.define('word', {
  audio: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true}
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true}
  },
  word: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  definition: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  }
})

module.exports = Word
