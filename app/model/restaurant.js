const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const restaurant = sequelize.define("restaurant", {
  rid: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  location: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  avg_price: {
    type: Sequelize.INTEGER(5),
    allowNull: true
  },
  taste_score: {
    type: Sequelize.STRING(4),
    allowNull: true
  },
  env_score: {
    type: Sequelize.STRING(4),
    allowNull: true
  },
  service_score: {
    type: Sequelize.STRING(4),
    allowNull: true
  },
  comments_num: {
    type: Sequelize.STRING(6),
    allowNull: true
  },
  level: {
    type: Sequelize.STRING(12),
    allowNull: true
  },
  city: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  district: {
    type: Sequelize.STRING(12),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(16),
    defaultValue: "未分类"
  }
});