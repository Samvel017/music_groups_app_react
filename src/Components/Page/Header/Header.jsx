import React from 'react';
import './header.scss'
import HeaderContent from './HeaderContent';
import Nav from './Nav';
export default function Header({user}) {
  return (
    <div className="header">
      <Nav user={user}/>
      <HeaderContent />
    </div>
  );
}
