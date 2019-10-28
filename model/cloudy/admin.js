const Sequelize = require('sequelize');

const sequelize = require('../../utils/database');

const cloudy_admin = sequelize.define('cloudy_admin', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  added_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  added_by: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
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

module.exports = cloudy_admin;
