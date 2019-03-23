import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Nav
      variant="tabs"
      className="justify-content-center"
      style={{ marginBottom: '20px' }}
    >
      <Nav.Item>
        <Link className="nav-link" to="/">Main page</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/orders">Orders</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/products">Products</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/customers">Customers</Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;