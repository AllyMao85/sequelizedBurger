
module.exports = function(sequelize, DataTypes) {
    var customer = sequelize.define("customers", {
      customer_name: DataTypes.STRING,
      
      // createdAt: DataTypes.TIMESTAMP,
      // updatedAt: DataTypes.TIMESTAMP
    });
    return customer;
  };
  
  
  