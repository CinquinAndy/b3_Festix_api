module.exports = (sequelize, DataTypes) => {
    const Artist_event = sequelize.define(
        'Artist_event',
        {
            id_artist: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                references: {
                    model: 'Artists',
                    key: 'id'
                },
            },
            id_event: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                references: {
                    model: 'Events',
                    key: 'id'
                },
            },
        },
        {}
    );
    Artist_event.associate = () => {
// associations can be defined here

    };
    return Artist_event;
};
