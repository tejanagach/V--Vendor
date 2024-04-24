import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentForm from './PaymentFOrm';

// Import other components used in routes
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import About from './About';
import VendorSignup from './VendorSignup';
import VendorLogin from './VendorLogin';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
import UserHome from './UserHome';
import VendorHome from './VendorHome';
import ProductUploadForm from './ProductUploadForm';
import ProductList from './ProductList';
import Pricing from './Pricing';
import Cart from './Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<About />} />
        <Route path='/vendorSignup' element={<VendorSignup />} />
        <Route path='/vendorLogin' element={<VendorLogin />} />
        <Route path='/UserSignup' element={<UserSignup />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/UserHome' element={<UserHome />} />
        <Route path='/vendorHome' element={<VendorHome />} />
        <Route path='/productUploadForm' element={<ProductUploadForm />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Cart />} />
        {/* Add route for PaymentForm */}
        <Route path='/payment' element={<PaymentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
