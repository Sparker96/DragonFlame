const router = require('express').Router();
const {
  models: { User, Character },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const characters = await Character.findAll({});
    res.json(characters);
  } catch (err) {
    next(err);
  }
});
