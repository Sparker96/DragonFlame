'use strict';

const {
  db,
  models: { User, Character, Monster },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ]);

  // Creating Characters

  const characters = await Promise.all([
    Character.create({
      name: 'dummyOne',
      class: 'knight',
      race: 'human',
      strength: 3,
      intellect: 1,
      dexterity: 2,
      vitality: 2,
      charisma: 2,
      healthCurrent: 20,
      healthTotal: 20,
      armor: 2,
      userId: 1,
    }),
    Character.create({
      name: 'dummyTwo',
      class: 'wizard',
      race: 'elf',
      strength: 1,
      intellect: 5,
      dexterity: 1,
      vitality: 2,
      charisma: 1,
      healthCurrent: 20,
      healthTotal: 20,
      armor: 1,
      userId: 1,
    }),
    Character.create({
      name: 'thiefTest',
      class: 'thief',
      race: 'human',
      strength: 1,
      intellect: 1,
      dexterity: 3,
      vitality: 2,
      charisma: 3,
      healthCurrent: 20,
      healthTotal: 20,
      armor: 3,
      userId: 2,
    }),
  ]);

  // Creating Monsters

  const monsters = await Promise.all([
    Monster.create({
      name: 'meanBig',
      class: 'monster',
      race: 'ogre',
      strength: 3,
      intellect: 0,
      dexterity: 0,
      vitality: 2,
      charisma: 0,
      healthCurrent: 20,
      healthTotal: 20,
      armor: 0,
    }),
    Monster.create({
      name: 'meanWiz',
      class: 'wizard',
      race: 'human',
      strength: 1,
      intellect: 2,
      dexterity: 0,
      vitality: 1,
      charisma: 1,
      healthCurrent: 10,
      healthTotal: 10,
      armor: 0,
    }),
    Monster.create({
      name: 'baddyThief',
      class: 'thief',
      race: 'human',
      strength: 1,
      intellect: 1,
      dexterity: 1,
      vitality: 1,
      charisma: 1,
      healthCurrent: 10,
      healthTotal: 10,
      armor: 1,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${characters.length} characters`);
  console.log(`seeded ${monsters.length} characters`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
