const Sequelize = require('sequelize');

const sequelize = require('../../utils/database');

const gym_staff = sequelize.define('gym_staff', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    unique: true,
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.NUMBER,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pass_reset_key: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pass_reset_time: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  added_by_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  credit: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  previous_due: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  sailory_base: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sailory: {
    type: Sequelize.DOUBLE
  },
  previous_payment_date: {
    type: Sequelize.DATE
  },
  next_due_date: {
    type: Sequelize.DATE
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

module.exports = gym_staff;
