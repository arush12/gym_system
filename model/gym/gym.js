const Sequelize = require('sequelize');

const sequelize = require('../../utils/database');

const gym_list = sequelize.define('gym', {
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
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expire_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  last_payment_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  previous_due: {
    type: Sequelize.DOUBLE
  },
  credit: {
    type: Sequelize.DOUBLE
  },
  added_by_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  added_by_role: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = gym_list;
