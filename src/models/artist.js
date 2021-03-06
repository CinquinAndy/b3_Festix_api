module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define(
        'Artist',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            artistName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            musicStyle: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            photo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id_user: {
                allowNull: false,
                type: DataTypes.UUID,
                unique:true,
                references: {
                    model: 'Users',
                    key: 'id'
                },
            },
        },
        {}
    );
    Artist.associate = ({User,Event}) => {
// associations can be defined here
        User.hasOne(Artist, {as: 'Artists', foreignKey: 'id'})
        Artist.belongsTo(User, {as: 'Users', foreignKey: 'id_user'})

        Artist.belongsToMany(Event, {through: 'Artist_events', foreignKey: "id_artist"})

    };
    return Artist;
};

