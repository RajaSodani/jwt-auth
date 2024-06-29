import React, { useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            await api.post('/auth/signup', { username, password, role });
            const displayRole = role.charAt(0).toUpperCase() +role.slice(1)
            setMessage(`${displayRole} registered successfully`);

        } catch (error) {   
            setMessage('Error: ' + error.response.data.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4 text-center">Signup</h2>
                {message && <p className="text-green-500 mb-4">{message}</p>}
                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Signup
                </button>
                <p>
                Already a Registered ?{' '}
                <Link to='/login' className="text-blue-600 hover:text-blue-800">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
