
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
        nguoiHuongDan:{
            type:DataTypes.TEXT,
            defaultValue: ''
        },
        ngayBaoVe:{
            type:DataTypes.DATE,
        },
    })
    return DeTai
}