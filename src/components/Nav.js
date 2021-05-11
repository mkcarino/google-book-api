import React from "react";
import Search from "./Search";
import styled from "styled-components";
import googleLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

import NavButton from "./NavButton";

const Nav = ({ home }) => {
  if (home) {
    return (
      <StyledNav>
        <NavButton />
      </StyledNav>
    );
  }
  return (
    <StyledNav>
      <Link to="/">
        <Logo src={googleLogo} />
      </Link>
      <Search />
      <NavButton />
    </StyledNav>
  );
};

/* Start Styling */
const StyledNav = styled.div`
  display: flex;
  justify-content: start;
  padding: 3rem 3rem 0 3rem;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-size: 1rem;
    justify-content: center;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 55px;
  margin-right: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

/* End Styling */
export default Nav;
