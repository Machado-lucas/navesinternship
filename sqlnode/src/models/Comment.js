const {Model, DataTypes} = require('sequelize')

class Comment extends Model{
    static init (sequelize){
        super.init({
            message: DataTypes.STRING,
            author: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Post, {  foreignKey: 'post_id', as: 'commentary'  })
    }
}

module.exports = Comment