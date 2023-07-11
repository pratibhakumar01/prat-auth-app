// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav>
        <Button onClick={() => navigate('/')}>Home</Button>
        <Button onClick={() => navigate('/protected')}>
          User
        </Button>
        <Button onClick={() => navigate('/protected2')}>
          Admin
        </Button>
        <Button onClick={() => navigate('/protected3')}>
          Developer
        </Button>
        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button onClick={() => logOut()}>Logout</Button>
        )}
      </nav>
      <Heading level={1}>Example Auth Routes App</Heading>
      <span>
        {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}
      </span>

      <Outlet />
    </>
  );
}