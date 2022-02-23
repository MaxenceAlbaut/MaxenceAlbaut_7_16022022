const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const articleCtrl = require('../controllers/article');

router.get('/', auth, articleCtrl.getAllArticle);
router.get('/:id', auth, articleCtrl.getOneArticle);

router.post('/', auth, articleCtrl.postArticle);

router.delete('/:id', auth, articleCtrl.deleteArticle);

module.exports = router;