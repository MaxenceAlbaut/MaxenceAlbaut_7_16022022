const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.get('/', auth, commentCtrl.getAllComment);

router.post('/', auth, commentCtrl.postComment);

router.delete('/:id', auth, commentCtrl.deleteComment);


module.exports = router;