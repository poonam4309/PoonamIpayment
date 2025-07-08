import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dashboard';
import Payout from './Component/Payout';
import PassBook from './Component/PassBook';
// import PaymentLinks from './Component/PaymentLinks';
import Settlements from './Component/Settlements';
import TransactionDetails from './Component/Transaction/TransactionDetails';
import Payin from './Component/Payment/Payin';
import PayinViewAllDetails from './Component/Payment/PayinViewAllDetails';
import DateDropdown from './Component/Transaction/DateDropdown';
import BulkPayment from './Component/BulkPayment/BulkPayment';
import Client from './Component/Client';
import Profile from './Component/Profile';
import Login from './Pages/Login';
import FilterDropdown from './Component/Transaction/FilterDropdown';
// import Payments from './Component/Payments';




const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage on first load
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Login handler
  const handleLogin = (email, password) => {
    if (email === "admin" && password === "admin@123") {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/payout" element={<Payout />} />
            <Route path="/transactions" element={<TransactionDetails />} />
            <Route path="/passbook" element={<PassBook />} />
            <Route path="/payin" element={<Payin />} />
            {/* <Route path="/payment-links" element={<PaymentLinks />} /> */}
            <Route path="/settlements" element={<Settlements />} />
            <Route path="/paying-view-details" element={<PayinViewAllDetails />} />
            <Route path="/bulk-payment" element={<BulkPayment />} />
            <Route path="/datedropdown" element={<DateDropdown />} />
            <Route path="/client" element={<Client />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/filterdropdown" element={<FilterDropdown />} />
           {/* <Route path="/payments" element={<Payments />} /> */}

          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
