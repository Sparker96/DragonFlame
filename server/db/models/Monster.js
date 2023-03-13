const Sequelize = require('sequelize');
const db = require('../db');

const Monster = db.define('monster', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  class: {
    type: Sequelize.STRING,
  },
  race: {
    type: Sequelize.STRING,
  },
  strength: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  intellect: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dexterity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  vitality: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  charisma: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  healthCurrent: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  healthTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  armor: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Monster;