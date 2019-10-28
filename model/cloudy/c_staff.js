const Sequelize = require('sequelize');

const sequelize = require('../../utils/database');

const cloudy_staff = sequelize.define('cloudy_staff', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  },
  previous_payment_date: {
    type: Sequelize.DATE
  },
  previous_payment_amount: {
    type: Sequelize.DOUBLE
  },

  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  credit: {
    type: Sequelize.DOUBLE
  },
  previous_due: {
    type: Sequelize.DOUBLE
  }
});

module.exports = cloudy_staff;
