module.exports = (sequelize, DataTypes) => {
    const JobDetails = sequelize.define('JobDetails', {
        IdJob:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        description:DataTypes.TEXT,
    })
    return JobDetails
}