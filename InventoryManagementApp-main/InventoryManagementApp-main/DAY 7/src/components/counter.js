

import React, { useState } from 'react';
import Nav from"./nav";
import './contact.css';

const Counter = () => {
  const [items, setItems] = useState([]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAddItem = () => {
    const newItem = {
      productName,
      quantity: parseInt(quantity),
      price: parseInt(price),
    };

    setItems([...items, newItem]);
    setProductName('');
    setQuantity(0);
    setPrice(0);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    let total = 0;

    items.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(2);
  };

  return (
    <div className='homeContainer'>
    <Nav/>
      <h1 style={{padding:"50px"}}>Inventory Management</h1>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={handleProductNameChange}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="container-1">
      <table style={{padding:"30px"}}>
      <thead>
      <tr>
      <th style={{padding:"30px"}}>Product Name</th>
      <th style={{padding:"30px"}}>Quantity</th>
      <th style={{padding:"30px"}}>Price</th>
      <th style={{padding:"30px"}}>Actions</th>
      </tr>
      </thead>
      <tbody>
      {items.map((item, index) => (
          <tr key={index}>
          <td>{item.productName}</td>
          <td>{item.quantity}</td>
          <td>Rs{item.price}</td>
          <td>
          <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </td>
          </tr>
          ))}
          </tbody>
          </table>
          </div>
      <div>Total: Rs{calculateTotal()}</div>
    </div>
  );
};

export default Counter;
