import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import BuyerDashboard from './pages/BuyerDashboard';
import BidderDashboard from './pages/BidderDashboard';
import AdminDashboard from './pages/AdminDashboard'; // NEW
import EvaluatorDashboard from './pages/EvaluatorDashboard'; // ✅ Import this
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/bidder-dashboard" element={<BidderDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* NEW */}
        <Route path="/evaluator-dashboard" element={<EvaluatorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
