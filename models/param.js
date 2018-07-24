const Sequelize = require('sequelize');
const sequelize = require('../sequelize/sequelize');
const param = sequelize.define('param', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  type: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
  },
  mean: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  code: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
})

