const passport = require('passport')
const strategies = require('./strategies')
const User = require('../db/model').user

 passport.use(strategies.localStrategy)
    //console.log(user)
passport.serializeUser(function (user, done) {
    console.log(user.username+'tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt-------------------------')
    console.log('serialize' + user.id)
    done(null, user.id)
})

passport.deserializeUser(function(userId, done) {
    console.log('deserialize' + userId)

    User.findOne({
        where: {id: userId}
    })
        .then((user) => done(null, user))
        .catch((err) => done(err))
})

exports = module.exports = passport