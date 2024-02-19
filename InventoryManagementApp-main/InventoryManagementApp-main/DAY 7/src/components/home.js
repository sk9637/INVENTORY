import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
import Nav from "./nav";
import './home.css';
// import img from '../components/bg.jpg';

export default function Home() {
  return (
    <div className="homeContainer">
      <Nav/>
      <div className="content">
      <h1 style={{fontSize:"50px"}}>Makes Order and Inventory
      Management Easy</h1>
      We built Cin7 Orderhive with one thing in mind: to help retailers and sellers simplify their back-end tasks.
Our goal is to make running your business easier, by providing you with a seamless back-end workflow
that gives you the confidence to grow your business.
      </div>
      <button className="button-known">
      <Link to="/product" className="content">
      Get Started
      </Link>
      </button>
      
    </div>
  );
}