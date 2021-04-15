import React from "react";
import Search from "./Search";
import styled from "styled-components";
import googleLogo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <StyledNav>
            <Link to= "/">
            <Logo src={googleLogo}/>
            </Link>
            <Search />
        </StyledNav>
    )
}

/* Start Styling */
const StyledNav = styled.div`
display:flex;
justify-content:space-between;
width: 100%;
@media (max-width: 768px) {
    flex-direction: column;
    flex-flow: wrap;
    font-size: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
const Logo = styled.img`
width: 280px;
height:85px;
`;
/* End Styling */
export default Nav;
