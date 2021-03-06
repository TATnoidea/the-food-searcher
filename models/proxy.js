const Sequelize = require('sequelize');
const sequelize = require('../sequelize/sequelize');

const proxy = sequelize.define('proxy', {
  id: {
    type: Sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true
  },
  ip: Sequelize.STRING(16),
  port: Sequelize.INTEGER(6),
  protocol: {
    type: Sequelize.STRING(5),
    defaultValue: 'http'
  },
  speed: {
    type: Sequelize.INTEGER(3),
    allowNull: true
  }
})
