import React from "react";
import styled from "styled-components";

import Search from "../components/Search";
import Nav from "../components/Nav";
import googleLogo from "../assets/logo.png";

const Home = () => {
  return (
    <>
      <Nav home={true} />
      <StyledHome>
        <Logo src={googleLogo} />
        <Search />
      </StyledHome>
    </>
  );
};

/* Start Styling */
const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 60vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 50vh;
  }
`;
const Logo = styled.img`
  width: 350px;
  height: 115px;
  margin: 2rem;
`;
/* End Styling */
export default Home;
