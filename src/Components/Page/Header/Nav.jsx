import React from 'react';
import { NavLink } from 'react-router-dom';
import BasicMenu from './BasicMenu';

export default function Nav({user}) {
  return (
    <div className='nav'>
      <ul className='nav-bar'>
        <li><NavLink to='/home'>HOME</NavLink></li>
        <li><NavLink to='/discover'>DISCOVER</NavLink></li>
        <li><NavLink to='/marketplace'>MARKETPLACE</NavLink></li>
      </ul>
      <BasicMenu user={user} />
      
      
    </div>
  );
}
