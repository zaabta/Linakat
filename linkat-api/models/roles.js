'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roles.hasMany(models.users, { foreignKey: "roleId"});
    }
  }
  roles.init({
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};