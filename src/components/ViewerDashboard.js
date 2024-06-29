import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewerDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Viewer Dashboard</h1>
            <p>Welcome to the viewer dashboard.</p>
            <button 
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
                Logout
            </button>
        </div>
    );
};

export default ViewerDashboard;
