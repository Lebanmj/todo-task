import React from 'react';
import { NavLink } from 'react-router-dom';
import UserList from './UserList';
import App from './App';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">To-DO</a>
    <a className="navbar-brand" href="users">API-Crud</a>

   
  
   
  </nav>
  );
};

export default NavBar;
