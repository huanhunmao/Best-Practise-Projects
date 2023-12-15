const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // 登录成功后的处理逻辑
    console.log('auth google account successfully !!!');
    res.redirect('https://www.baidu.com/');
  }
);

module.exports = router;
