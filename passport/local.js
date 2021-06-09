const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id,(err,user) => {
        done(err,user);
    });
});

// local user - check if exists
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},(email,password,done) => {
    User.findOne({email:email})
    .then((user) => {
        if (!user) {
            return done(null,false);
        }
        bcrypt.compare(password,user.password,(err,isMatch) => {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                return done(null,user);
            }else {
                return done(null,false);
            }
        });
    }).catch((err) => {
        console.log(err);
    });
}));