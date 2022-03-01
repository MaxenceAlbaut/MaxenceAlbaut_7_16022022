const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const articleCtrl = require('../controllers/article');

router.get('/', auth, articleCtrl.getAllArticle);
router.get('/:userId', auth, articleCtrl.getUserArticle);

router.post('/', auth, articleCtrl.postArticle);

router.delete('/:id', auth, articleCtrl.deleteArticle);

module.exports = router;