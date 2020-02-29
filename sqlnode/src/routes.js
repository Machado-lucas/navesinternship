const express = require('express')
const PostControler = require('./controllers/PostController')
const CommentControler = require('./controllers/CommentController')


const routes = express.Router()

routes.get('/posts', PostControler.index)
routes.post('/posts', PostControler.store)

routes.get('/posts/:post_id/comments', CommentControler.index)
routes.post('/posts/:post_id/comments', CommentControler.store)

module.exports = routes