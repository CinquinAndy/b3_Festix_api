const {v4: uuidv4} = require("uuid");

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Artists', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            artistName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            musicStyle: {
                type: Sequelize.STRING,
                allowNull: false
            },
            photo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            id_user: {
                type: Sequelize.UUID,
                allowNull: false,
                unique: true,
                references: {
                    model: 'Users',
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
    down: queryInterface => queryInterface.dropTable('Artists')
};
