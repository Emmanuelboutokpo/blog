const express = require('express')
const { getAll, getSingle, postArticle, updatePost, deletePost } = require('../controller/postController')
const app = express()
const router = express.Router()

router.get("/post/getAll", getAll)
router.get("/post/:id", getSingle)
router.post("/post/getAll", postArticle)
router.put("/post/:id", updatePost)
router.delete("/post/:id", deletePost)
 

module.exports = router;