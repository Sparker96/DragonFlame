const router = require('express').Router();
const {
  models: { User, Character },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const characters = await Character.findAll({
      where: {
        userId: req.query.userId,
      },
    });
    res.json(characters);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  let newCharacter = req.body.character;
  newCharacter.health = newCharacter.vitality*10;
  newCharacter.armor = newCharacter.dexterity;
  try {
    const character = await Character.create(newCharacter);
    res.json(character);
  } catch (err) {
    next(err);
  }
});
