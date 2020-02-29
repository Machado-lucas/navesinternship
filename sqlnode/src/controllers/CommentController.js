const Post = require('../models/Post')
const Comment = require('../models/Comment')

module.exports = {
    async index(req, res){
        const { post_id } = req.params

        const post = await Post.findByPk(post_id, {
            include: { association: 'commentaries'}
        })

        return res.json(post)
    },

    async store(req, res){
        const { post_id } = req.params
        const { author, message } = req.body

        const post = await Post.findByPk(post_id)

        if(!post){
            return res.status(400).json({ error: 'Post not found' })
        }

        const comment = await Comment.create({
            author,
            message,
            post_id,
        })

        return res.json(comment)
    }
}