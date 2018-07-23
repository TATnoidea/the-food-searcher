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
// const food_type = sequelize.define('food_type', {
//   ft_id: {
//     type: Sequelize.INTEGER(11),
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//   },
// });

// const city = sequelize.define('city', {
//   cid: {
//     type: Sequelize.INTEGER(11),
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING(10),
//     allowNull: false,
//   },
//   alias: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//   },
// });

// const position = sequelize.define('position', {
//   pid: {
//     type: Sequelize.INTEGER(11),
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING(15),
//     allowNull: false,
//   },
//   p_cid: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: city,
//       key: 'cid',
//     },
//   },
// });

restaurant.sync().then(res => {
  console.log("成功同步数据库restaurant");
});

food.sync().then(res => {
  console.log('成功同步数据库food');
});

module.exports = {
  restaurant,
  food,
};

