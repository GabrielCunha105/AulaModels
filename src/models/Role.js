const sequelize = require("../config/sequelize");
const DataTypes = require("sequelize");

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
},{
  timestamps: false
});

Role.associate = function(models) {
  Role.hasMany(models.User);
}

module.exports = Role;