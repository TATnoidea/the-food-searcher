const Sequelize = require('sequelize');
const config = require('./mysql.config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  timezone: '+08:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 10000,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
  sync: {
    force: false,
  },
});

module.exports = sequelize;
