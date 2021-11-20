const {v4: uuidv4} = require("uuid");

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Events', {
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
            hour: {
                type: Sequelize.DATE,
                allowNull: true
            },
            id_festival: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'Festivals',
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
    down: queryInterface => queryInterface.dropTable('Events')
};
