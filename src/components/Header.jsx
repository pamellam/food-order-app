import React from 'react';
import Button from './UI/Button';
import logo from '.././assets/logo.jpg';
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Restaurant Logo" />
        <h1>Food Order App </h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
