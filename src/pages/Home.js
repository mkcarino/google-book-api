import React from "react";
import styled from "styled-components";

import Search from "../components/Search";
import googleLogo from "../assets/logo.png";

const Home = () => {
  return (
    <StyledHome>
      <Logo src={googleLogo} />
      <Search />
    </StyledHome>
  );
};

/* Start Styling */
const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 80vh;
  }
`;
const Logo = styled.img`
  width: 350px;
  height: 115px;
  margin: 2rem;
`;
/* End Styling */
export default Home;
