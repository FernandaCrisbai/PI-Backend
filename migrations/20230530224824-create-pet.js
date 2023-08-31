"use strict";


module.exports = {
  up: (queryInterface, Sequelize) => {
    const Pet = queryInterface.createTable('pet',{
        id: {
          allowNull: false,
          increment: true,                                                 
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        breed: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        birthDate: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        weigth: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        userId: {
          type: Sequelize.STRING(36),
          allowNull: false,
        },

       
      });

    return Pet;
  },
  down: (queryInterface) => queryInterface.dropTable("Pet"),
};
