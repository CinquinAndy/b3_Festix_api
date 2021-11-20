import {v4 as uuidv4} from 'uuid';

module.exports = (sequelize, DataTypes) => {
    const Festival = sequelize.define(
        'Festival',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: uuidv4()
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            photo: {
                type: DataTypes.STRING,
                allowNull: true
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true
            },
        },
        {}
    );
    Festival.associate = () => {
// associations can be defined here

    };
    return Festival;
};
