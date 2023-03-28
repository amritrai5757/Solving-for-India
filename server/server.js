const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Initialize Express app
const app = express();

// Serve static files from React app
app.use(express.static(path.join('C:', 'Users', 'amrit', 'OneDrive', 'Desktop', 'Solving-for-India', 'client', 'build')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://solvingforindiagfg:TEBEiwOKC15SX4v7@cluster0.e8ey2u2.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log(err);
});

// Configure Passport.js for Google sign-in
passport.use(new GoogleStrategy({
  clientID: '876687008029-racad9ri4fpoofmvhphnj4c32c27q0pr.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Add code here to handle user authentication
}));

// Configure session middleware
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());

// Define authentication routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect to home page
  res.redirect('/');
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join('C:', 'Users', 'amrit', 'OneDrive', 'Desktop', 'Solving-for-India', 'client', 'build', 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
