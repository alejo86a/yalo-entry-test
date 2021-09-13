var express = require('express');
const BlogpostsValidator = require('../validators/blogpostValidator');
const blogspostsCtrl = require('../controllers/blogpostsCtrl');
var router = express.Router();

router.get('/', BlogpostsValidator.request.get, blogspostsCtrl.getBlogsPosts);

module.exports = router;
