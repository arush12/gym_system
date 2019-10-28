const Sequelize = require('sequelize');

const sequelize = require('../../utils/database');

const gym_sms_log = sequelize.define('gym_sms_log', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  sender_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sender_role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message_to: {
    type: Sequelize.NUMBER
  },
  message: {
    type: Sequelize.String
  }
});

module.exports = gym_sms_log;
