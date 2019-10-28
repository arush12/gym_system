const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('cloudy_gym', 'root', 'lalworld@Lal', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
