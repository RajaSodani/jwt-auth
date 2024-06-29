import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import EditorDashboard from './components/EditorDashboard';
import ViewerDashboard from './components/ViewerDashboard';
import Signup from './components/Signup';
import { setAuthToken } from './api/api';
import './index.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setAuthToken(token);
    }, [token]);

    const isAuthenticated = () => !!token; // Check if the token exists

    return (
        <Router>
            <Routes>
                <Route 
                    path="/signup" element={<Signup/>} />
                <Route 
                    path="/login" element={<Login setToken={setToken} />} />
                <Route 
                    path="/admin" element={isAuthenticated() ? <AdminDashboard /> : <Navigate to="/login" />} />
                <Route 
                    path="/editor" element={isAuthenticated() ? <EditorDashboard /> : <Navigate to="/login" />} />
                <Route 
                    path="/viewer"element={isAuthenticated() ? <ViewerDashboard /> : <Navigate to="/login" />} />
                <Route 
                    path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
