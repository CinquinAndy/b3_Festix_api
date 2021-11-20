const {v4: uuidv4} = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Festivals', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: uuidv4()
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false
        },
        photo: {
          type: Sequelize.STRING,
          allowNull: true
        },
        date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
  down: queryInterface => queryInterface.dropTable('Festivals')
};
