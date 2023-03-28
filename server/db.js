const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://solvingforindiagfg:TEBEiwOKC15SX4v7@cluster0.e8ey2u2.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('Connected to MongoDB');
}).catch(err => {
console.log(err);
});