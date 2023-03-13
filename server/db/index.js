const db = require('./db');
const User = require('./models/User');
const Character = require('./models/Character');
const Monster = require('./models/Monster');

User.hasMany(Character);
Character.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Character,
    Monster,
  },
};
