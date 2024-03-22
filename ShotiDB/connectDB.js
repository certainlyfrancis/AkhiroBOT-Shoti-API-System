const { Sequelize } = require("sequelize");
const Video = require("./Models/video");

try {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./Data/database.sqlite",
  });

  await sequelize.authenticate();
  await sequelize.sync();

  module.exports = { sequelize, Video };
} catch (error) {
  console.error("Unable to connect to the database:", error);
  throw error;
}
