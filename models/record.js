'use strict';
module.exports = (sequelize, DataTypes) => {
  const record = sequelize.define('record', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    date: DataTypes.STRING,
    amount: DataTypes.STRING
  }, {});
  record.associate = function (models) {
    record.belongsTo(models.User)
  };
  return record;
};