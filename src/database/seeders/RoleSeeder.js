const Role = require("../../models/Role");

 const seedRoles = async function () {

  const roles = [
    { "name": "admin" },
    { "name": "promoter" },
    { "name": "user" },
  ];

  try {
    await Role.sync({ force: true });
    await Role.bulkCreate(roles);

  } catch (err) { console.log(err); }
}

module.exports = seedRoles;