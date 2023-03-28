const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
clientID: '876687008029-racad9ri4fpoofmvhphnj4c32c27q0pr.apps.googleusercontent.com',
clientSecret: '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',
callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
// Add code here to handle user authentication
}));