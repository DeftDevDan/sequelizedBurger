module.exports = function(sequelize, Sequelize) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
    	type: Sequelize.STRING,
    	allowNull: false
    },
    devoured: {
    	type: Sequelize.BOOLEAN,
    	defaultValue: false
    },
    date: {
    	type: Sequelize.DATE,
    	allowNull: false
    }
  });
  return Burger;
};