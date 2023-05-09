import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const withAuth = (Dashboard) => {
  const AuthWrapper = (props) => {
    const history = useHistory();
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        history.push('/login');
        return;
      }

      fetch('/api/verify-token', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Token verification failed');
          }
        })
        .catch((error) => {
          console.error(error);
          history.push('/login');
        });
    }, [history]);

    return <Dashboard {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
