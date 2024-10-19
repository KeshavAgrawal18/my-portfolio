import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo>MyPortfolio</Logo>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/skills">Skills</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
`;

const MenuItem = styled.li`
  margin: 0 15px;
  font-size: 18px;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Navbar;
