import { useState } from 'react';
import {  FaBars} from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = {
    name: 'Nithish' 
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar} style={{color:'black'}}>
        <FaBars />
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <BsArrowLeft  />
        </button>
        <div className="sidebar-content">
        <h1 style={{paddingLeft : "20px"}}> Inventory</h1>
          <p style={{paddingTop : "20px"}}>Hi {user.name}</p>
          <Link to="/reports">Reports</Link>
          <Link to="/contact">Support</Link>
          <Link to="/contact">Stock</Link>
          <Link to="/">Sign out</Link>
        </div>
      </div>
      <Link to="/home" className="navbar-logo">
        Inventory Management
      </Link>
      <ul className="nav-items">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
        
          <Link to="/product">Products</Link>
        </li>
        
        <li>
          <Link to="/about">AboutUs</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;