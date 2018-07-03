

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    // createdAt: DataTypes.TIMESTAMP,
    // updatedAt: DataTypes.TIMESTAMP
  });
  return burger;
};


