import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './customer.css'

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('/api/customers'); // Replace with your API endpoint for fetching customers
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  return (
    <div>
      <h1>Customer Page</h1>
      {customers.map((customer) => (
        <div key={customer.id}>
          <h2>{customer.name}</h2>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default customer;
