'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
  
      },
      name:{
        type: Sequelize.STRING,
        allowNull:true,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
