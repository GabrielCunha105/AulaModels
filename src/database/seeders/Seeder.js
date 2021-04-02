require('../../config/dotenv')();
require('../../config/sequelize');

const seedUsers = require('./UserSeeder');
const seedRoles = require('./RoleSeeder');

(async () => {
  try {
    await seedRoles();
    await seedUsers();
    
  } catch(err) { console.log(err) }
})();
