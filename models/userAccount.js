module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    FullName: {
      type: DataTypes.STRING,
      allowNull: false,
      // primaryKey: true
    },
    userImageURL: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
  //commenting this out until we have more understanding of how we are routing/using the data
  // user.associate = function(models) {
  //   postItem.hasMany(models.post, {
  //     foreignKey: "user_id",
  //     onDelete: "cascade"
  //   });
  // };
  return user;
};
