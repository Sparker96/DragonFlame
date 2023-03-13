const router = require('express').Router();
const {
  models: { Monster },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const monsters = await Monster.findAll();
    res.json(monsters);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id)
  try {
    const monster = await Monster.findByPk(req.params.id);
    res.json(monster);
  } catch (err) {
    next(err);
  }
});
