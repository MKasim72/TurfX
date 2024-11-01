import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { OwnerContext } from '../store/owner';
import { Navigate } from 'react-router';

function OwnerLogOut() {
    const { OwnerLogOut } = useContext(OwnerContext);

    useEffect(() => {
        OwnerLogOut();
        toast.success('Logged out successfully', {
            toastId: 'owner-logout-success', 
        });
    }, [OwnerLogOut]); 

    return <Navigate to='/owner_login' />;
}

export default OwnerLogOut;
