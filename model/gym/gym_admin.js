const Sequelize = require('sequelize');

const sequelize = require('../../utils/database');

const gym_admin = sequelize.define('gym_admin', {
  Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  phone_number: {
    type: Sequelize.NUMBER,
    allowNull: false,
    unique: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pass_reset_key: {
    type: Sequelize.STRING,
    allowNull: true
  },
  pass_reset_time: {
    type: Sequelize.NUMBER,
    allowNull: true
  },
  profile_img: {
    type: Sequelize.STRING,
    allowNull: true
  },
  background_img: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = gym_admin;
