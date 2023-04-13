import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [cropName, setCropName] = useState('');
  const [amount, setAmount] = useState(0);
  const [newCropName, setNewCropName] = useState('');
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/addtocart', {
        email,
        cropName,
        amount
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleDeleteCrop = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:4000/deletecrop/${email}/${cropName}`);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleGetCart = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:4000/cart/${email}`);
      setCart(res.data.cart);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleUpdateCrop = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/updatecrop/${email}/${cropName}`, {
        newCropName,
        amount
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Add to cart</h1>
      <form onSubmit={handleAddToCart}>
        <label>
          Email:
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Crop name:
          <input type="text" required value={cropName} onChange={(e) => setCropName(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" required value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </label>
        <button type="submit">Add to cart</button>
      </form>

      <h1>Delete crop</h1>
      <form onSubmit={handleDeleteCrop}>
        <label>
          Email:
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Crop name:
          <input type="text" required value={cropName} onChange={(e) => setCropName(e.target.value)} />
        </label>
        <button type="submit">Delete crop</button>
      </form>

      <h1>Get cart</h1>
      <form onSubmit={handleGetCart}>
        <label>
          Email:
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Get cart</button>
      </form>
      {cart.length > 0 && (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.cropName} - {item.amount}
            </li>
          ))}
        </ul>
      )}

      <h1>Update crop</h1>
      <form onSubmit={handleUpdateCrop}>
        <label>
          Email:
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Crop name:
          <input type="text" required value={cropName} onChange={(e) => setCropName(e.target.value)} />
        </label>
        <label>
          New crop name:
          <input type="text" required value={newCropName} onChange={(e) => setNewCropName(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" required value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </label>
        <button type="submit">Update crop</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;
