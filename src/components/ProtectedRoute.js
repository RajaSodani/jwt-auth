import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, token, ...rest }) => (
    <Route
        {...rest}
        element={token ? <Component /> : <Navigate to="/login" />}
    />
);

export default ProtectedRoute;
