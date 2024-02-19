import React, { useState } from 'react';
import Nav from './nav';
import "./product.css";

function Product() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchText}`);
  };
  

  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
          </div>
          <div className="search-bar">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text" 
                placeholder="Search for products"
                value={searchText}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
          <div className="user-actions">
          </div>
        </nav>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome </h1>
            <p>Shop the latest trends items</p>
          </div>
        </section>
      </header>
      <main className="main-content">
        <section className="product-list">
          <h2>Featured Products</h2>
          <div className="product-card">    
          
            <div className="product-details">
              <h3>Product Name</h3>
              <p>Product description and details.</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
          
            <div className="product-details">
              <h3>Product Name</h3>
              <p>Product description and details.</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
          
            <div className="product-details">
              <h3>Product Name</h3>
              <p>Product description and details.</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;
