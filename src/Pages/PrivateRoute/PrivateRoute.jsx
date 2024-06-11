import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div className="flex items-center justify-center">
            <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login' replace />
    }
    return (
        <div>
            {children}

        </div>
    );
};

export default PrivateRoute;