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

  const urlParams = new URLSearchParams(window.location.search);
  const info = urlParams.get('info');
  console.log(info);


  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://inventoryserver.onrender.com/addtocart', {
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
      const res = await axios.delete(`https://inventoryserver.onrender.com/deletecrop/${email}/${cropName}`);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleGetCart = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://inventoryserver.onrender.com/cart/${email}`);
      setCart(res.data.cart);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleUpdateCrop = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://inventoryserver.onrender.com/updatecrop/${email}/${cropName}`, {
        newCropName,
        amount
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (

    <div class="mainBody">
      <h1 class="mainTitle">Inventory</h1>
      <div class="upper">
        <div class="section_1 section">
          <h1>Add to cart</h1>
          <form onSubmit={handleAddToCart}>
            <label>
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <input type="text" placeholder="Crop Name" required value={cropName} onChange={(e) => setCropName(e.target.value)} />
            </label>
            <label>
              <input type="number" placeholder="Amount" required value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div class="section_2 section">
          <h1>Delete crop</h1>
          <form onSubmit={handleDeleteCrop}>
            <label>
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <input type="text" placeholder="Crop name" required value={cropName} onChange={(e) => setCropName(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div class="lower">
        <div class="section_3 section">
          <h1>View cart</h1>
          <form onSubmit={handleGetCart}>
            <label>
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div class="section_4 section">
          <h1>Update crop</h1>
          <form onSubmit={handleUpdateCrop}>
            <label>
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <input type="text" placeholder="Crop name" required value={cropName} onChange={(e) => setCropName(e.target.value)} />
            </label>
            <label>
              <input type="text" required placeholder="new crop name" value={newCropName} onChange={(e) => setNewCropName(e.target.value)} />
            </label>
            <label>
              <input type="number" placeholder="Amount" required value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div class="table">
        <h2>Item:</h2>
        {cart.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Crop Name</th>
                <th>Amount (kg)</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.cropName}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>



      <p class="alert">{message}</p>
    </div>
  );
}

export default App;
