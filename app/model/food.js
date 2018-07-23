const Sequelize = require("sequelize");
const sequelize = require("./sequelize");

const food = sequelize.define("food", {
  fid: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER(5),
    allowNull: true
  },
  recommend_num: {
    type: Sequelize.INTEGER(6),
    allowNull: true
  },
  url: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  rid: {
    type: Sequelize.INTEGER(11),
    references: {
      model: "restaurants",
      key: "rid"
    }
  }
});