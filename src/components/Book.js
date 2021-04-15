import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bookCover from "../assets/book.png";

function Book({ book, img, title, authors }) {
  console.log(img);
  return (
    <Link to={`/pages/Details/${book}`} style={{ textDecoration: "none" }}>
      <StyledBook>
        <LeftCol>
          <BookImg
            src={img === "bookCover" ? bookCover : img}
            alt="BookCover"
          />
        </LeftCol>
        <RightCol>
          <h3>{title}</h3>
          {authors !== undefined ? (
            authors.map((author) => <p>{author}</p>)
          ) : (
            <p>Author not available</p>
          )}
        </RightCol>
      </StyledBook>
    </Link>
  );
}

/* Start Styling */
const StyledBook = styled.div`
  display: flex;
  color: black;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 0 2rem;
  margin: 1em;
  margin-top: 120px;
  width: 600px;
  height: 170px;
  flex-direction: row;
  background-color: white;
  img {
    top: -80px;
    width: 150px;
    height: 220px;
  }
  @media (max-width: 480px) {
    margin-top: 1rem;
    flex-direction: column;
    width: 400px;
    height: 380px;
    img {
      top: 0;
      margin-top: 1rem;
      width: 150px;
      font-size: 0.85rem;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
const LeftCol = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
`;
const BookImg = styled.img`
  position: relative;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
  }
`;
const RightCol = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding-top: 2rem;
  @media (max-width: 480px) {
    flex: 1;
  }
  h3 {
    margin-bottom: 0.75rem;
  }
  p {
    color: gray;
  }
`;
/* End Styling */

export default Book;
