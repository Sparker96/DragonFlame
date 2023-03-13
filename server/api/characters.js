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
  newCharacter.healthTotal = newCharacter.vitality * 10;
  newCharacter.healthCurrent = newCharacter.healthTotal;
  newCharacter.armor = newCharacter.dexterity;
  try {
    const character = await Character.create(newCharacter);
    res.json(character);
  } catch (err) {
    next(err);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const character = await Character.findByPk(req.body.id);
    res.status(200).send(await character.destroy());
  } catch (err) {
    next(err);
  }
});
