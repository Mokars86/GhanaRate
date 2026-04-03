import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddProperty from './pages/AddProperty';
import MapCapture from './pages/MapCapture';
import PropertyDetails from './pages/PropertyDetails';
import Payment from './pages/Payment';
import Receipt from './pages/Receipt';
import Notifications from './pages/Notifications';

import Profile from './pages/Profile';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Header />
      <main className="container pb-bottom-nav" style={{ paddingBottom: '5rem' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/map-capture" element={<MapCapture />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/pay/:id" element={<Payment />} />
          <Route path="/receipt/:id" element={<Receipt />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  );
}

export default App;
