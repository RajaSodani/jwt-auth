
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { loginUser, setAuthToken } from '../api/api';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await loginUser({ username, password });
            const { token,role } = data;
            // console.log(data)

            localStorage.setItem('token', token);
            setToken(token);
            setAuthToken(token);

            if (role === 'admin') {
                navigate('/admin');
            } else if (role === 'editor') {
                navigate('/editor');
            } else if (role === 'viewer') {
                navigate('/viewer');
            } else {
                navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Invalid credentials. Please try again.');
            } else {
                setError('An error occurred. Please try again later.');
            }
            
            console.error('Login error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
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
                {/* <div className="mb-4">
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                    </select>
                </div> */}

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
                <p>
                Want to Register?{' '}
                <Link to='/signup' className="text-blue-600 hover:text-blue-800">Signup</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
