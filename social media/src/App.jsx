import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import './App.css'

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute user={user} />} />
        <Route path="/auth" element={<AuthRoute user={user} />} />
      </Routes>
    </div>
  );
}

function ProtectedRoute({ user }) {
  return user ? <Home /> : <Navigate to="/auth" />;
}

function AuthRoute({ user }) {
  return user ? <Navigate to="/" /> : <Auth />;
}

export default App;
