/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food', {
    fid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'fid'
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'name'
    },
    price: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      field: 'price'
    },
    recommendNum: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'recommend_num'
    },
    url: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'url'
    },
    rid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'restaurants',
        key: 'rid'
      },
      field: 'rid'
    }
  }, {
    tableName: 'food'
  });
};
