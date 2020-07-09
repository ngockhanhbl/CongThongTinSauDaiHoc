
module.exports = (sequelize, DataTypes) => {
    const TinTuc = sequelize.define('TinTuc', {
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        des:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        image:{
            type:DataTypes.BLOB,
        }
    })
    return TinTuc
}