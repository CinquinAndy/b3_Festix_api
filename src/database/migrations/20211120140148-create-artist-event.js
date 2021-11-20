const {v4: uuidv4} = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Artist_events', {
        id_artist: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'Artists',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        id_event: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          references: {
            model: 'Events',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
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

  down: queryInterface => queryInterface.dropTable('Artist_events')
};
