// const express = require('express');
import express from 'express';
// const cors = require("cors");
import cors from 'cors';
const app = express();
const port = 4000;
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config()
const db_password = process.env.db_password;

const db = `mongodb+srv://amritrai5757:${db_password}@cluster0.bwx4vyb.mongodb.net/khetifyDatabase?retryWrites=true&w=majority`;
app.use(cors());

app.listen(port, () => console.log('Server started'));


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  cart: [{
    cropName: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  }]
});

const User = mongoose.model('User', userSchema);

// module.exports = User;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Add body parser middleware
app.use(express.json());

//write a post request which accepts email, cropName and amount as input and creates a new user as email if it doesnt exist previously and adds the crop to the user's cart && if user exist previously it checks whetehre crop is already present in the cart or not and if not present it adds the crop to the cart

// Create a new user or add crop to an existing user's cart
app.post('/addtocart', async (req, res) => {
  const { email, cropName, amount } = req.body;

  try {
    let user = await User.findOne({ email });

    // If user does not exist, create a new user and add crop to the cart
    if (!user) {
      user = new User({
        email,
        cart: [{ cropName, amount }]
      });

      await user.save();
      return res.status(201).json({ message: 'User created and crop added to cart' });
    }

    // If user exists, check if crop already exists in the cart
    const cropIndex = user.cart.findIndex(c => c.cropName === cropName);

    // If crop exists, update the amount
    if (cropIndex !== -1) {
      return res.status(400).json({ message: 'Crop already exists in cart' });
    } else {
      // If crop does not exist, add it to the cart
      user.cart.push({ cropName, amount });
    }

    await user.save();
    res.status(200).json({ message: 'Crop added to cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.delete('/deletecrop/:email/:cropName', async (req, res) => {
  const { email, cropName } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cropIndex = user.cart.findIndex(c => c.cropName === cropName);

    if (cropIndex === -1) {
      return res.status(404).json({ message: 'Crop not found in user cart' });
    }

    user.cart.splice(cropIndex, 1);

    await user.updateOne({ cart: user.cart });

    res.status(200).json({ message: 'Crop deleted from user cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.get('/cart/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cart = user.cart.map(({ cropName, amount }) => ({ cropName, amount }));
    res.status(200).json({ cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



// Update crop in user's cart
app.put('/updatecrop/:email/:cropName', async (req, res) => {
  const { email, cropName } = req.params;
  const { newCropName, amount } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cropIndex = user.cart.findIndex(c => c.cropName === cropName);

    if (cropIndex === -1) {
      return res.status(404).json({ message: 'Crop not found in cart' });
    }

    // Check if new crop name already exists in cart
    const newCropIndex = user.cart.findIndex(c => c.cropName === newCropName);
    if (newCropIndex !== -1 && newCropIndex !== cropIndex) {
      return res.status(400).json({ message: 'Crop name already exists in cart' });
    }

    // Update the crop name and amount
    user.cart[cropIndex].cropName = newCropName;
    user.cart[cropIndex].amount = amount;

    await user.save();
    res.status(200).json({ message: 'Crop updated in cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
    
// module.exports = app;
