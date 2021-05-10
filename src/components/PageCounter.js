import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageCounter = ({ pageNumber, text }) => {

  return (
    <StyledCounter>
      <PageIndicator>
        <Link
          to={
            pageNumber === 0
              ? `/search/${text}/${pageNumber}`
              : `/search/${text}/0`
          }
        >
        1
        </Link>
      </PageIndicator>
      <PageIndicator>
        <Link
          to={
            pageNumber === 20
              ? `/search/${text}/${pageNumber}`
              : `/search/${text}/20`
          }
        >
        2
        </Link>
      </PageIndicator>
      <PageIndicator>
        <Link
          to={
            pageNumber === 30
              ? `/search/${text}/${pageNumber}`
              : `/search/${text}/30`
          }
        >
        3
        </Link>
      </PageIndicator>
    </StyledCounter>
  );
};
const StyledCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
`;
const PageIndicator = styled.div`
  margin: 1rem;
  a{
  text-decoration:none;
}
`;

export default PageCounter;
