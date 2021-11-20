import {v4 as uuidv4} from 'uuid';

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define(
        'Event',
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
            hour: {
                type: DataTypes.DATE,
                allowNull: true
            },
            id_festival: {
                allowNull: false,
                type: DataTypes.UUID,
                references: {
                    model: 'Festivals',
                    key: 'id'
                },
            },
        },
        {}
    );
    Event.associate = ({Festival,Artist}) => {
// associations can be defined here
        Event.belongsTo(Festival, {as: 'Festivals', foreignKey: 'id_festival'})
        Festival.hasOne(Event, {as: 'Events', foreignKey: 'id'})

        Event.belongsToMany(Artist, {through: 'Artist_events', foreignKey: "id_event"})
    };
    return Event;
};
