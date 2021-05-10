import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { useHistory } from "react-router-dom";

const BookPage = ({ title, img, authors, desc, isbn, pub }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <BookContainer>
      <LeftCol>
        <BookImg src={img} alt="sio" />
      </LeftCol>
      <RightCol>
        <h2>{title}</h2>
        {authors !== "Author not available" ? (
          authors.map((author) => <h3 key={author}>{author}</h3>)
        ) : (
          <h3>{authors}</h3>
        )}
        <span>Publisher: {pub}</span>
        <span>ISBN:{isbn}</span>
        <BookInfo>{ReactHtmlParser(desc)}</BookInfo>
        <GoBack onClick={goBack}>
          <h4> Go back</h4>
        </GoBack>
      </RightCol>
    </BookContainer>
  );
};

/* Start Styling */
const BookContainer = styled.div`
  padding: 3rem 3rem;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
const LeftCol = styled.div`
  padding: 0.5rem 3rem;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0rem 0.5 3rem;
  flex: 2;
`;
const BookImg = styled.img`
  max-width: 100%;
  width: 500px;
  @media (max-width: 768px) {
    max-height: 700px;
  }
`;
const BookInfo = styled.div`
  padding-top: 3rem;
`;
const GoBack = styled.button`
  margin-top: auto;
  align-self: flex-end;
  background-color: #57bd84;
  outline: 0;
  border: 0;
  font-size: 1rem;
  width: 8rem;
  height: 3rem;
  border-radius: 0.7rem;
  @media (max-width: 480px) {
    font-size: 0.85rem;
    width: 7rem;
    height: 2.5rem;
  }
`;
/* End Styling */

export default BookPage;
