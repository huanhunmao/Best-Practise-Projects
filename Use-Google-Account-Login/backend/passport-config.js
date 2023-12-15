const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()

console.log('process.env',process.env.PORT);
function configurePassport(){
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.URL,
        scope: ['profile', 'email'] 
      },
      (accessToken, refreshToken, profile, done) => {
        // 在这里处理用户信息，将其存储到数据库中
        // 例如，将 profile.id 存储到 MongoDB 中

        return done(null, profile);
      }
    ));
}

module.exports = configurePassport;