import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { RootState } from '../store';
import PrivateLayout from './layout/PrivateLayout';

function PrivateRoute() {
  const status = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === 'notSignedIn') {
      navigate('/login');
    }
  }, [status, navigate]);

  return status === 'signedIn' ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : null;
}

export default PrivateRoute;
