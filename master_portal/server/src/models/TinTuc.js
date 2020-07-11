
module.exports = (sequelize, DataTypes) => {
    const TinTuc = sequelize.define('TinTuc', {
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        type:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        des:{
            type:DataTypes.TEXT,
        },
        image:{
            type:DataTypes.TEXT,
        }
    })
    return TinTuc
}