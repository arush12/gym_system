const Sequelize = require('sequelize');

const sequelize = require('../../utils/database');

const gym_user = sequelize.define('gym_user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date_of_birth: {
    type: Sequelize.DATE
  },
  height: {
    type: Sequelize.DOUBLE
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  next_due_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  previous_payment_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  pass_reset_key: {
    type: Sequelize.STRING
  },
  pass_reset_time: {
    type: Sequelize.NUMBER
  },
  previous_due: {
    type: Sequelize.DOUBLE
  },
  credit: {
    type: Sequelize.DOUBLE
  },
  monthly_fee: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  has_tranner: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tranner_id: {
    type: Sequelize.INTEGER
  },
  profile_img: {
    type: Sequelize.STRING,
    allowNull: true
  },
  background_img: {
    type: Sequelize.STRING,
    allowNull: true
  },
  admission_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  added_by_id: {
    type: Sequelize.DATE,
    allowNull: false
  },
  added_by_role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subscription_id: {
    type: Sequelize.INTEGER
  },
  timming: {
    type: Sequelize.STRING
  }
});

module.exports = gym_user;
