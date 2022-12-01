const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true,
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  price:{
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
});
  
//User.sync();
User.sync({alter:true});


module.exports = User;