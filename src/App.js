import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/static/About";
import AddAddress from "./components/user/AddAddress";
import CartPage from "./components/user/CartPage";
import Commercial from "./components/user/Commercial";
import Contact from "./components/static/Contact";
import ConvertCoins from "./components/user/ConvertCoins";
import EWaste from "./components/user/EWaste";
import Feedback from "./components/user/Feedback";
import Findjob from "./components/user/Findjob";
import Footer from "./components/common/Footer";
import ForgotPassword from "./components/auth/ForgotPassword";
import Home from "./components/static/Home";
import Login from "./components/auth/Login";
import MySubmission from "./components/user/MySubmissions";
import Navbar from "./components/common/Navbar";
import Profile from "./components/user/Profile";
import React, { useState } from "react";
import Register from "./components/auth/Register";
import Resident from "./components/user/Resident";
import Shop from "./components/user/Shop";
import SubmitWaste from "./components/user/SubmitWaste";
import SuccessPage from "./components/user/SuccessPage";
import ViewCoins from "./components/user/ViewCoins";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./components/user/CartContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for login state
  const location = useLocation();

  // Determine if Navbar should be shown based on the current route
  const showNavbar = !['/login', '/register', '/forgotpassword', '/feedback'].includes(location.pathname);

  return (
    <CartProvider>
      <div>
        {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-coins" element={<ViewCoins totalCoins={100} transactions={[
              { date: '2023-07-28', amount: 50, type: 'Completed Challenge' },
              { date: '2023-07-27', amount: 30, type: 'Submitted Solution' },
              { date: '2023-07-26', amount: 20, type: 'Reviewed Code' },
              { date: '2023-07-25', amount: 40, type: 'Daily Login Bonus' },
              { date: '2023-07-24', amount: 10, type: 'Shared Solution' }
            ]} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/mysubmission" element={<MySubmission />} />
            <Route path="/submitwaste" element={<SubmitWaste />} />
            <Route path="/resident" element={<Resident />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/ewaste" element={<EWaste />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/addaddress" element={<AddAddress />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Add the Findjob route */}
            <Route path="/findjob" element={<Findjob />} />
            {/* Add the Feedback route */}
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
