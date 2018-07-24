/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('params', {
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'pid'
    },
    mean: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'mean'
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'code'
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'type'
    }
  }, {
    tableName: 'params'
  });
};
