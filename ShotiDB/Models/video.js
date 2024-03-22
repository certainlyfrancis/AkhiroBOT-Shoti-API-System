const { DataTypes } = require("sequelize");
const sequelize = require("../connectDB");

const Video = sequelize.define("Video", {
  rawLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Video;
