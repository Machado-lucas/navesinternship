const {Model, DataTypes} = require('sequelize')

class Post extends Model{
    static init (sequelize){
        super.init({
            author: DataTypes.STRING,
            title: DataTypes.STRING,
            text: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Comment, {  foreignKey: 'post_id', as: 'commentaries'  })
    }
}

module.exports = Post