
module.exports = (sequelize, DataTypes) => {
    const DeTai = sequelize.define('DeTai', {
        tenDeTai:{
            type:DataTypes.STRING,
            allowNull: false
        },
        nghienCuuSinh:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        nghienCuuSinh:{
            type:DataTypes.TEXT,
        },
        ngayBaoVe:{
            type:DataTypes.DATE,
        },
    })
    return DeTai
}