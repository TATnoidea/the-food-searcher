/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proxies', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    ip: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'ip'
    },
    port: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'port'
    },
    protocol: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: 'http',
      field: 'protocol'
    },
    speed: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'speed'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt'
    }
  }, {
    tableName: 'proxies'
  });
};
