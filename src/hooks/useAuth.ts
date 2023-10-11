import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';

export const useAuth = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token && location.pathname !== '/login') {
      navigate('/login', { state: { from: location } });
    }
  }, [token, navigate, location]);

  return { token };
};
