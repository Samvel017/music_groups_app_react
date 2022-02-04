import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';

export default function Layout({ user }) {
  return (
    <div>
      <Header user={user} />
      <Outlet />
      <Footer user={user} />
    </div>
  );
}
