/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurants', {
    rid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'rid'
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'name'
    },
    url: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'url'
    },
    location: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'location'
    },
    avgPrice: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      field: 'avg_price'
    },
    tasteScore: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'taste_score'
    },
    envScore: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'env_score'
    },
    serviceScore: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'service_score'
    },
    commentsNum: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'comments_num'
    },
    level: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'level'
    },
    city: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'city'
    },
    district: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'district'
    },
    type: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: '未分类',
      field: 'type'
    }
  }, {
    tableName: 'restaurants'
  });
};
