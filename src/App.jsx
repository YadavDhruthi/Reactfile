import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Cart from './Cart';
import PurchaseHistory from './PurchaseHistory';
import './App.css';
import { useSelector } from 'react-redux';
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    const
    cart=useSelector((state)=>state.cart);
     const totalitems=cart.reduce((sum,item)=>sum+item.quantity,0)
    return (
        <>
        <GoogleOAuthProvider clientId= "683449382164-78cihk9icskmd56ihjvisqe0h13gf2ob.apps.googleusercontent.com">
            <GoogleLoginComponent/>
        </GoogleOAuthProvider>
       <BrowserRouter>

         <nav>
            <Link to="/">Home</Link>
                <Link to="/veg">Veg</Link>
                <Link to="/non-veg">NonVeg</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/cart">Cart({totalitems})</Link>
                <Link to="/purchase-history">Purchase History</Link>
         </nav>

        <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/veg" element={<Veg />} />
                    <Route path="/non-veg" element={<NonVeg />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/purchase-history" element={<PurchaseHistory />} />
                </Routes>
            
        </BrowserRouter>
        </>

    );
}

export default App;


